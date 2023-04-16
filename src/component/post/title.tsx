import styled from "styled-components";
import Image from "next/image";
const Element = ({className,src} : {className:string,src:string})=>{
    return(
        <section id="post-title" className={className}>
            <Image src={src} alt="title-image" width={36} height={36}/>
        </section>
    )
}

const StyledElement = styled(Element)`
    width:100%;
  `;
  
  export default function PostTitle ({src}:{src:string}):JSX.Element{
      return(
          <StyledElement className="post-title" src={src}/>
      )
  }