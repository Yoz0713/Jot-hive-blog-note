import LoginForm from '@/component/utils/loginForm'
import styled from "styled-components";


const Element = ({className} : {className:string})=>{
    return(
        <section id="login" className={className}>
           <LoginForm/>
        </section>
    )
}

const StyledElement = styled(Element)`
display:flex;
align-items:center;
    width:100%;
    height:185vw;
  `;
  
  export default function Login ():JSX.Element{
      return(
          <StyledElement className="loginPage" />
      )
  }