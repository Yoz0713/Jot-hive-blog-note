import styled from "styled-components";
import PostBanner from "./banner";
import PostInform from "@/component/post/inform";
import PostContent from "./content";
import PostComment from "./comment";
const Element = ({ className }:{className:string}) => {
    return (
      <section id="post-container" className={className}>
        <div className="post-first-page">
        <PostBanner src="/webp/post-banner-image.webp"/>
        <PostInform/>
        </div>
        <PostContent/>
        <PostComment/>
      </section>
    );
  };
  
  const StyledElement = styled(Element)`
    width:100%;
    .post-first-page{
      position:relative;
      width:100%;
      height:65vw;
    }
  `;
  
  export default function PostCotainer ():JSX.Element{
      return(
          <StyledElement className="post-container"/>
      )
  }