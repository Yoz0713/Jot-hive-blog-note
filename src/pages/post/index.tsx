import Post from "@/component/post";
import styled from "styled-components";
const Element = ({className} : {className:string})=>{
    return(
        <section id="post" className={className}>
            <Post/>
        </section>
    )
}

const StyledElement = styled(Element)`
    width:100%;

  `;
  
  export default function PostContainer ():JSX.Element{
      return(
          <StyledElement className="post" />
      )
  }