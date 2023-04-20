
import styled from "styled-components";
const Element = ({className} : {className:string})=>{
    return(
        <section id="edit" className={className}>
   
           
        </section>
    )
}

const StyledElement = styled(Element)`
    width:100%;

  `;
  
  export default function EditContainer ():JSX.Element{
      return(
          <StyledElement className="edit" />
      )
  }