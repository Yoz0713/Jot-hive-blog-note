import styled from "styled-components";
import PostBanner from "./banner";
const Element = ({ className }:{className:string}) => {
    return (
      <section id="post-container" className={className}>
        <PostBanner src="/webp/post-banner-image.webp"/>
      </section>
    );
  };
  
  const StyledElement = styled(Element)`
    width:100%;
  `;
  
  export default function PostCotainer ():JSX.Element{
      return(
          <StyledElement className="post-container"/>
      )
  }