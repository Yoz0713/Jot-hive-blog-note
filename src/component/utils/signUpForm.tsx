import styled from "styled-components";
import Image from "next/image";
import { checkEnvironment } from "../lib/checkEnvironment";
import { useRouter } from "next/router";
import { useState } from "react";
const FormElement = ({className}:{className:string})=>{
    const router = useRouter();
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    let apiRoute = checkEnvironment("/user/signUp").api

    const handleSignUp = (e:any)=>{
        e.preventDefault();
        console.log(1)
        fetch(apiRoute,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
              mode:"cors",
              body: JSON.stringify({
                username:username,
                password:password,
              }),
        })
    }
    return(
        <>
         <form action={apiRoute} method="post" className={className}>
              <Image src="/svg/login-hive.svg" alt={"jot-hive"} width={40} height={40}/>
                    <div className="form-box">
                        <label htmlFor="username">電子信箱: </label>
                        <input type="text" id="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="password">密碼:</label>
                        <input type="text" id="password"  onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <button type="submit" onClick={handleSignUp}>註冊</button>
        </form>
        </>
       
    )
}


const StyledElement =styled(FormElement)`
display:flex;
flex-direction:column;
align-items:center;
width:85%;
margin:0 auto;
padding:8vw 3.5vw;
background-color:${(props)=>props.theme.background};
border-radius:15px;
> img{
    margin-bottom:8vw;
    width:13vw;
    height:auto;
}
    .form-box{
        display:flex;
        width:100%;
      
        label{
            width:30%;
            text-align:center;
            font-size:${(props)=>props.theme.mFontSize};
            color:${(props)=>props.theme.color};
            letter-spacing:0.05em;
        }
        input{
            color:${(props)=>props.theme.color};
            font-size:${(props)=>props.theme.mFontSize};
            background-color:transparent;
            border:none;
            border-bottom:1px solid rgba(255,255,255,0.5);
            padding-bottom:2vw;
            margin-bottom:2vw;
            line-height:1.6;
            &:focus{
                outline:none;
            }
        }
        &:not(:last-child){
            margin-bottom:9vw;
        }
    }
    button{
        width:85%;
        height:9vw;
        background-color:${(props)=>props.theme.border};
        color:${(props)=>props.theme.color};
        font-size:${(props)=>props.theme.sFontSize};
        border:none;
        border:1px solid rgba(255,255,255,0.5);
        border-radius:10px;
        outline:none;
        letter-spacing:0.1em;
        font-weight:900;
    }
`


export default function SignUpForm ():JSX.Element{
    return(
      <>
          
         <StyledElement className="signUp-form" />
      </>
     
    )
}