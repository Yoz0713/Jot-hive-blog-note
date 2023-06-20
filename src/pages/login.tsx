import LoginForm from '@/component/utils/loginForm'
import styled from "styled-components";
import GoogleLogin from "../component/utils/googleLogin"
import { checkLogin } from '@/component/lib/checkLogin';
import { useState } from 'react';
import { useRouter } from "next/router";
const Element = ({className} : {className:string})=>{
    const router = useRouter()
    const [login,setLogin] = useState(false)
     checkLogin().then((data)=>{
        if(data){
            setLogin(true)
           setTimeout(()=>{
            router.push("/")
           },2000)
        }
     })
    return(
        <section id="login" className={className}>
            {!login ?  <>
            <LoginForm/>
           <GoogleLogin/>
            </> : 
                <h1 style={{color:"#fff"}}>您已登入，即將跳轉回首頁</h1>
            }
           
      
        </section>
    )
}

const StyledElement = styled(Element)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    width:100%;
    height:185vw;
  `;
  
  export default function Login ():JSX.Element{
      return(
          <StyledElement className="loginPage" />
      )
  }