import styled from "styled-components";
import Image from "next/image";
const Element = ({className,name} : {className:string,name:string})=>{
    return(
        <section id="profile-name" className={className}>
               <h4>{name}</h4>
        </section>
    )
}

const StyledElement = styled(Element)`
            h4{
                color:${(props)=>props.theme.color};
                font-size:${(props)=>props.theme.mFontSize};
                font-family:${(props)=>props.theme.NotoJapan};
                letter-spacing:0.05em;
                font-weight:300;
            }
  `;
  
  export default function ProfileName ({name}:{name:string}):JSX.Element{
      return(
          <StyledElement className="profile-name" name={name}/>
      )
  }