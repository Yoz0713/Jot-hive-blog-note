import styled from "styled-components";
import Image from "next/image";

const iconSize=28;
const Home = ()=>{
    return(
        <section className="home-btn">
  <Image src={"/svg/footer-home-icon.svg"} width={iconSize} height={iconSize} alt="home"/>
        </section>
      
    )
}

const Category=()=>{
    return(
        <section className="category-btn">
<Image src={"/svg/footer-category-icon.svg"} width={iconSize} height={iconSize} alt="category" />
        </section>
        
    )
}

const Gear=()=>{
    return(
        <section className="gear-btn">
 <Image src={"/svg/footer-gear-icon.svg"} width={iconSize} height={iconSize} alt="gear"/>
        </section>
       
    )
}

const Member=()=>{
    return(
        <section className="member-btn">
 <Image src={"/svg/footer-member-icon.svg"} width={iconSize} height={iconSize} alt="member"/>
        </section>
       
    )
}

const Element = ({ className }:{className:string}) => {
    return (
      <section id="functionNav" className={className}>
        <Home/>
        <Category/>
        <Gear/>
        <Member/>
      </section>
    );
  };
  
  const StyledElement = styled(Element)`
  display:flex;
  justify-content:space-between;
    width:100%;
    height:100%;
    align-items:center;
    section{
        display:flex;
        justify-content:center;
        align-items:center;
        width:20%;
    }
  `;
  
  export default function FunctionNav ():JSX.Element{
      return(
          <StyledElement className="functionNav"/>
      )
  }