import { useRouter } from "next/router";
import styled from "styled-components";
import SwitchMainContent from "../utils/switchContent";
import PostHeader from "../utils/postHeader";
const Element = ({ className }:{className:string}) => {
  const router = useRouter()
 
  return (
    <section id="header" className={className}>
      {router.pathname === "/" ? <SwitchMainContent/> :<PostHeader/>}
    </section>
  );
};

const StyledHeader = styled(Element)`
  position:fixed;
  left:0;
  top:0;
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  z-index:30;
`;

export default function Header ():JSX.Element{
    return(
        <StyledHeader className="header"/>
    )
}