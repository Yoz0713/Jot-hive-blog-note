import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
const Element = ({ className }:{className:string}) => {
    const iconSize=28;
    const router = useRouter();
    const handleClick = ()=>{
        router.push("/")
    }
    return (
        <section id="post-header" className={className}>
            <Image src="/svg/header-back-icon.svg" alt="back" width={iconSize} height={iconSize} onClick={handleClick}/>
            <Image src="/svg/header-share-icon.svg" alt="share" width={iconSize} height={iconSize}/>
    </section>
    );
  };

  const StyledElement = styled(Element)`
  display:flex;
  width: 100%;
  height:100%;
  justify-content:space-between;
  align-items:center;
  border-bottom:1px solid #ccc;
  padding:0 5vw;
  color: ${(props) => props.theme.color};
  
`;

export default function PostHeader(){
    return(
       <StyledElement className="post-header"/>
    )
}