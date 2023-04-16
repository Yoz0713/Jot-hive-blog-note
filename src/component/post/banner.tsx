import styled from "styled-components";
import Image from "next/image";
const Element = ({className,src} : {className:string,src:string})=>{
    return(
        <section className={className}>
            <Image src={src} alt="banner-image" width={480} height={360}/>
        </section>
    )
}

const StyledElement = styled(Element)`
    width:100%;
    img{
        width:100%;
        height:65vw;
        object-fit:cover;
    }
  `;
  
  export default function PostBanner ({src}:{src:string}):JSX.Element{
      return(
          <StyledElement className="post-banner" src={src}/>
      )
  }