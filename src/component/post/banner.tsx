import styled from "styled-components";
import Image from "next/image";
const Element = ({className,src} : {className:string,src:string})=>{
    return(
        <section className={className}>
            <Image src={src} alt="banner-image" width={480} height={360} loading="eager"/>
        </section>
    )
}

const StyledElement = styled(Element)`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        filter:brightness(0.55)
    }
  `;
  
  export default function PostBanner ({src}:{src:string}):JSX.Element{
      return(
          <StyledElement className="post-banner" src={src}/>
      )
  }