import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
const Element = ({ className }:{className?:string}) => {
    const router = useRouter()
    return (
        <section id="add-post-btn" className={className} onClick={()=>router.push("/newPost")}>
            <Image src="/svg/footer-note-icon.svg" alt={"Post"} width={40} height={40}/>
        </section>
    );
  };

  const StyledElement = styled(Element)`
  position:absolute;
  width:fit-content;
  left:0;
  right:0;
  margin:0 auto;
  top:-11vw;
  padding:1.5vw;
  background-color:#fff;
  border:4px solid ${props=>props.theme.border};
  border-radius:50%;
`;

export default function AddNewPost(){
    return(
       <StyledElement className="add-post-btn"/>
    )
}