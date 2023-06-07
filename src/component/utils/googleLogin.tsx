import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { checkEnvironment } from "../lib/checkEnvironment";
export default function GoogleLogin(){
    const router = useRouter();
    const url = checkEnvironment("/auth/google").api
    const handleSubmit=()=>{
        router.push(url)
    }
    return(
        <>
        <SignUpBox onClick={handleSubmit}>
        <Image src="/svg/google-logo.svg" alt={"jot-hive"} width={40} height={40}/>
        <p>使用Google帳戶登入</p>
        </SignUpBox>
        </>
       
    )
}



const SignUpBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:85%;
margin:5vw auto 0;
padding:6vw 3.5vw;
background-color:${(props)=>props.theme.background};
border-radius:15px;
img{
    width:6.5vw;
    height:auto;
    margin-right:3.5vw;
}
p{
    width:fit-content;
    color:${(props)=>props.theme.color};
    font-size:${(props)=>props.theme.sFontSize};
    letter-spacing:0.1em;
    span{
        color:${(props)=>props.theme.border};
        border-bottom:1px solid ${(props)=>props.theme.border};
        margin-left:0.8vw;
    }
}
`;
