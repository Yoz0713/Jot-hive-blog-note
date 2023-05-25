import SignUpForm from '@/component/utils/signUpForm'
import styled from "styled-components";


const Element = ({className} : {className:string})=>{
    return(
        <section  className={className}>
           <SignUpForm/>
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
  
  export default function SignUp ():JSX.Element{
      return(
          <StyledElement className="SignUp" />
      )
  }