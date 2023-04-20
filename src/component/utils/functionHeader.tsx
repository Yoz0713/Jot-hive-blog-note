import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import {FollowStar} from "../svgCollection"
const Element = ({ className }:{className:string}) => {
    const iconSize=28;
    const router = useRouter();
    const handleClick = ()=>{
        router.push("/")
    }
    const [follow , setFollow] = useState(false);
    const data={
        owner:true,
    }
    return (
        <section id="post-header" className={className}>
                     <Image src="/svg/header-back-icon.svg" alt="back" width={iconSize} height={iconSize} onClick={handleClick}/>
                     {router.pathname == "/post" &&
                         <div className="box">
                            <Image src="/svg/header-share-icon.svg" alt="share" width={iconSize} height={iconSize}/>
                          
                            <div className="follow-area" onClick={()=>setFollow(!follow)}>
                                {data.owner ?
                                <Image src="/svg/header-edit-icon.svg" alt="edit" width={iconSize} height={iconSize}/>
                                :
                                <FollowStar follow={follow}/>
                                }
                            </div>
                         </div>
                     }
    </section>
    );
  };

  const StyledElement = styled(Element)`
  display:flex;
  width: 100%;
  height:100%;
  justify-content:space-between;
  align-items:center;
  border-bottom:1px solid #ccc;
  padding:0 5vw;
  color: ${(props) => props.theme.color};
  .box {
    display:flex;
    svg{
        width:6.5vw;
        height:6.5vw;
    }
    & > :nth-child(1){
        margin-right:3.5vw;
    }
    .follow-area{
        display:flex;
        align-items:flex-end;
    }
  }
`;

export default function FunctionHeader(){
    return(
       <StyledElement className="post-header"/>
    )
}