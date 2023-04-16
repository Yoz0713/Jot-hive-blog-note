import styled from "styled-components";
import Image from "next/image";
const Element = ({className} : {className:string})=>{
    return(
        <section id="profile-photo" className={className}>
                <Image  src="/webp/jotHive-logo.webp"  alt="title-image" width={36} height={36}/>
        </section>
    )
}

const StyledElement = styled(Element)`
display:flex;
align-items:center;
            width:100%;
            height:100%;
            border-radius:50%;
            border:1.5px solid #fff;
            img{
                width:100%;
                height:auto;
            }
  `;
  
  export default function ProfilePhoto ():JSX.Element{
      return(
          <StyledElement className="profile-photo" />
      )
  }