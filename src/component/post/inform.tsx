import styled from "styled-components";
import Image from "next/image";
import ProfilePhoto from "../profile/photo";
import ProfileName from "../profile/name";


const PostTitle = ()=>{
    return(
        <h1>以MERN stack實作社群平台-環境設置</h1>
    )
}

const PostDate = ()=>{
    return(
        <p>2023/04/16</p>
    )
}
const Element = ({className} : {className:string})=>{
    return(
        <section id="post-inform" className={className}>
            <div className="post-title">
                <PostTitle/>
            </div>
            <div className="post-detail">
                <div className="left">
                    <div className="post-detail-photo">
                        <ProfilePhoto/>
                    </div>
                    <ProfileName name="Daniel Yu"/>
                </div>
                <div className="right">
                    <PostDate/>
                </div>
            </div>
           
        </section>
    )
}

const StyledElement = styled(Element)`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    width:90%;
    margin:0 auto;
    height:100%;
    z-index:5;
    .post-title{
        width:75%;
        h1{
            text-align:center;
            line-height:1.5em;
            letter-spacing:0.05em;
            color:${(props)=>props.theme.color};
            font-size:${(props)=>props.theme.xlFontSize};
            font-family:${(props)=>props.theme.NotoJapan};
        }
    }
    .post-detail{
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:absolute;
        width:100%;
        bottom:3vw;
        left:0;
        .left{
            display:flex;
            align-items:center;
            .post-detail-photo{
                width:8.5vw;
                height:8.5vw;
                border-radius:50%;
                border:1.5px solid #fff;
                margin-right:2vw;
            }
             .profile-name{
                margin-right:2vw;
             } 
        }
        .right{
            p{
                letter-spacing:0.15em;
                color:${(props)=>props.theme.color};
                font-size:${(props)=>props.theme.xsFontSize};
                font-family:${(props)=>props.theme.NotoJapan};
            }
        }
    }
  `;
  
  export default function PostInform ():JSX.Element{
      return(
          <StyledElement className="post-inform" />
      )
  }