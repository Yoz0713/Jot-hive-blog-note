import styled from "styled-components";
import Image from "next/image";
import { checkLogin } from "../lib/checkLogin";
import { useRouter } from "next/router";
const Element = ({ className }:{className?:string}) => {
  const router = useRouter();
    const handleCheckLogin =async ()=>{
      let isLoggedIn = await checkLogin()
      if(isLoggedIn){
          router.push("/newPost")
      }else{
        router.push("/login")
      }
    } 
    return (
        <section id="add-post-btn" className={className} onClick={handleCheckLogin}>
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
  top:-9vw;
  padding:1.5vw;
  background-color:#fff;
  border:4px solid ${props=>props.theme.border};
  border-radius:50%;
  img{
    width:8.5vw;
    height:8.5vw;
  }
`;

export default function AddNewPost(){
    return(
       <StyledElement className="add-post-btn"/>
    )
}