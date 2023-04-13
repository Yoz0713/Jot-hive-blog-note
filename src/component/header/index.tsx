import { useEffect } from "react";
import styled from "styled-components";
import SwitchMainContent from "../utils/switchContent";
const Element = ({ className }:{className:string}) => {
  return (
    <section id="header" className={className}>
      <SwitchMainContent/>
    </section>
  );
};

const StyledHeader = styled(Element)`
  position:fixed;
  left:0;
  top:0;
  width: 100%;
  height:15vw;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export default function Header ():JSX.Element{
    return(
        <StyledHeader className="header"/>
    )
}