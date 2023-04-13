import styled from "styled-components";
import AddNewPost from "../utils/newPost";
import FunctionNav from "../utils/functionNav";
const Element = ({ className }:{className:string}) => {
    return (
      <section id="footer" className={className}>
          <AddNewPost/>
          <FunctionNav/>
      </section>
    );
  };
  
  const StyledHeader = styled(Element)`
    position:fixed;
    left:0;
    bottom:0;
    width: 100%;
    height:18vw;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    border-top:1px solid #fff;
  `;
  
  export default function Footer ():JSX.Element{
      return(
          <StyledHeader className="footer"/>
      )
  }