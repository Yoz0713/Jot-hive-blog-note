import styled from "styled-components";
import Image from "next/image";
import ProfileName from "../profile/name";
import { SmallTitle } from "./smallTitle";
import LeaveComment from "../utils/leaveComment";
import { useState } from "react";
interface commentInterface {
    className:string,
    src:string,
    name:string,
    message?:{
        text:string,
        date:string
    }
}
interface newCommentInterface {
    className:string,
    src:string,
    name:string,
}
const CommentElement = ({className,src,name,message}:commentInterface)=>{
    return(
        <section className={className} >
            <div className="comment-profile">
                <div className="imgBox">
                <Image src={src} alt={src} width={480} height={280} loading="eager"/>
                </div>
                <ProfileName name={name}/>
            </div>
            {message ? 
            <div className="comment-message">
                <p>{message.text}</p>
                <span>{message.date}</span>
            </div>:
                <LeaveComment/>
            }
        </section>
      
    )
}


const Comment = styled(CommentElement)`
        border:1px solid #ccc;
        padding:3.5vw 2vw;
        border-radius:10px;
        .comment-profile{
            display:flex;
            align-items:center;
            margin-bottom:2vw;
            .imgBox{
                display:flex;
                justify-content:center;
                align-items:center;
                border:1.5px solid #fff;
                border-radius:50%;
                width:9vw;
                height:9vw;
                margin-right:2vw;
                img{
                    width:8vw;
                    height:auto;
                }

            }
        }
        .comment-message{
            display:flex;
            flex-direction:column;
            p,span{
                color:${(props)=>props.theme.color}
            }
            p{
                font-size:${(props)=>props.theme.sFontSize};
                letter-spacing:0.1em;
                margin-bottom:2vw;
                line-height:1.5em
            }
           
        }
  `;

const CommentWrapper = ({className} : {className:string})=>{
    const user = {
        img:"/webp/jotHive-logo.webp",
        username:"游閔暘",

    }
    const data = [{
        img:"/webp/jotHive-logo.webp",
        name:"Daniel Yu",
        id:1,
        message:{
            text:"下一篇會來講解NEXT.JS的渲染方式",
            date:"2023/04/16 18:30"
        }
    },{
        img:"/webp/jotHive-logo.webp",
        name:"Ann Chen",
        id:2,
        message:{
            text:"想請問有沒有github原始碼~~",
            date:"2023/04/16 19:00"
        }
    },{
        img:"/webp/jotHive-logo.webp",
        name:"Wayne Yu",
        id:3,
        message:{
            text:"npx create-next-app@latest --typescript似乎有錯哦，應該是npx create-next-app@latest --ts",
            date:"2023/04/16 21:08"
        }
    },{
        img:"/webp/jotHive-logo.webp",
        name:"Robbie Chen",
        id:4,
        message:{
            text:"感謝分享!",
            date:"2023/04/17 10:42"
        }
    }]
    const [newComment,setNewComment] =useState(false)
    return(
        <section className={className}>
            <div className="box">
                <SmallTitle>留言區</SmallTitle>
                <SmallTitle>{data.length}comments</SmallTitle>
            </div>
            <div className="leave-comment-container">
                {newComment ?  
                <>
                  <Comment className="leave-comment" src={user.img} name={user.username}/>
                    <div className="close" onClick={()=>setNewComment(false)}></div>
                </>
              
                
                : 
                <div className="addComment" onClick={()=>setNewComment(true)}>Add Comment</div>
                }
               
            </div>
               
           
                {data.map((item,i)=>{
                    return(
                        <Comment className="comment" src={item.img} name={item.name} key={item.id} message={item.message}/>
                    )
                })}
        </section>
    )
}

const StyledElement = styled(CommentWrapper)`
    width:100%;
    margin:5vw auto 0vw;
    padding:10vw 5%;
    border-radius:5px;
    background-color:${(props)=>props.theme.background};
    .box{
        display:flex;
        justify-content:space-between;
    }
    .leave-comment-container{
        position:relative;
        .close{
            position:absolute;
            width:5vw;
            height:5vw;
            right:5vw;
            top:6vw;
            transform:rotate(45deg);
            &::after,&::before{
                position:absolute;
                display:block;
                content:"";
                background-color:${(props)=>props.theme.color};
            }
            &::after{
                width:1px;
                height:100%;
                left:0;
                right:0;
                margin:0 auto;
                bottom:0;
            }
            &::before{
                width:100%;
                height:1px;
                top:0;
                left:0;
                margin:auto 0;
                bottom:0;
            }
        }
        .addComment{
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100%;
            border:1px solid #fff;
            padding:2vw 0;
            font-size:${(props)=>props.theme.sFontSize};
            color:${(props)=>props.theme.color};
            letter-spacing:0.05em;
        }
    }
    
    & > :not(:last-child){
        margin-bottom:6.5vw;
    }
  `;

  export default function PostComment ():JSX.Element{
      return(
        <>
            
           <StyledElement className="post-comment" />
        </>
       
      )
  }