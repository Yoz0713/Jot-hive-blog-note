import Post from "@/component/post";
import { getPostById } from "@/component/lib/getPost";
import styled from "styled-components";
import { GetServerSidePropsContext } from 'next';
type Props = {
  className: string;
  // 其他你需要的 props
};

const Element = ({ className }: Props): JSX.Element => {
  return (
    <section id="post" className={className}>
      <Post />
    </section>
  );
};

const StyledElement = styled(Element)`
  width: 100%;
`;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const postId: string = params?.id as string;

  if (!postId) {
    return {
      notFound: true,
    };
  }

  const post = await getPostById(postId);

  return {
    props: {
      className: 'post', // 這裡可以指定你要的 class 名稱
      post, // 將從 API 中獲取的 post 數據作為 props 傳遞給 Element 組件
    },
  };
};
interface PostType{
    category: String,
    userID: String,
    createdAt: Date,
    data: {
      banner: String,
      title: String,
      paragraph:[{
        type: {type: String},
        text: {type: String}
      }],
    },
  }
function PostContainer({ post, className }: Props & { post: PostType }): JSX.Element {
  return <StyledElement className={className} />;
}

export default PostContainer;

// getPostById("644be116794c9e29a7917fc1")