import LoginForm from '@/component/utils/loginForm'
import styled from "styled-components";
import GoogleLogin from "../component/utils/googleLogin"

const Element = ({className} : {className:string})=>{
    return(
        <section id="login" className={className}>
           <LoginForm/>
           <GoogleLogin/>
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