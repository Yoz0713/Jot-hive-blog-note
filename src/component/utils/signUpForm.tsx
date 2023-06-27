import styled from "styled-components";
import Image from "next/image";
import { checkEnvironment } from "../lib/checkEnvironment";
import { useRouter } from "next/router";
import { useState,useRef } from "react";
import ErrorMessage from "../lib/errorMessage";

const FormElement = ({className}:{className:string})=>{
  
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [name , setName ] = useState("");
    const [error,setError] = useState({isOpen:false,text:""})
    const checkPasswordRef = useRef<HTMLInputElement>(null)
    let signUpRoute = checkEnvironment("/user/signUp").api
    let registerRoute = checkEnvironment("/user/register").api
    const [verifyCode , setVerifyCode ] = useState(false)
    const handleSignUp = async(e:any)=>{
        e.preventDefault();
        if(username && password && name &&(password == checkPasswordRef.current?.value)){
            try{
                let signConsequence = await fetch(signUpRoute,{
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                      mode:"cors",
                      body: JSON.stringify({
                        name:name,
                        username:username,
                        password:password,
                      }),
                })
                let res = await signConsequence.json()
                if(res.error){
                    setTimeout(()=>{
                        setError({isOpen:false,text:res.error})
                    },950)
                    setError({isOpen:true,text:res.error})
                    
                }else if(res.success){
                    setVerifyCode(true)
                }
            }catch(error){
                console.log(error)
            }
        }else{
            if(username){
                if(password != checkPasswordRef.current?.value){
                    setTimeout(()=>{
                        setError({isOpen:false,text:"密碼不一致請重新確認"})
                    },950)
                    setError({isOpen:true,text:"密碼不一致請重新確認"})
                }else if (name == ""){
                    setTimeout(()=>{
                        setError({isOpen:false,text:"請輸入姓名"})
                    },950)
                    setError({isOpen:true,text:"請輸入姓名"})

                }else {
                    setTimeout(()=>{
                        setError({isOpen:false,text:"請輸入密碼"})
                    },950)
                    setError({isOpen:true,text:"請輸入密碼"})
                }
               
            }else{
                setTimeout(()=>{
                    setError({isOpen:false,text:"請輸入帳號"})
                },950)
                setError({isOpen:true,text:"請輸入帳號"})
            }
            
        }
       
        
        
    }
    return(
        <>
         <form action={signUpRoute} method="post" className={className}>
              <Image src="/svg/login-hive.svg" alt={"jot-hive"} width={40} height={40}/>
                    <div className="form-box">
                        <label htmlFor="name">姓名:</label>
                        <input type="text" id="name"  onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="username">電子信箱: </label>
                        <input type="text" id="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="password">用戶密碼:</label>
                        <input type="password" id="password"  onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="checkPassword">確認密碼:</label>
                        <input type="password" id="checkPassword" ref={checkPasswordRef}/>
                    </div>
                    <button type="submit" onClick={handleSignUp}>註冊</button>
        </form>
       <ErrorMessage state={error}/>
       {verifyCode &&  <VerifyBox router={registerRoute} data={{username:username,password:password,name:name}}/>}
       
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

const VerifyElement = styled.div`
    display:flex;
    align-items:center;
    position:fixed;
    width:100%;
    height:100%;
    z-index:20;
    background-color:${(props)=>props.theme.background};
    form{
        position:relative;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        width:90%;
        padding:25px 15px;
        .form-box{
            display:flex;
            justify-content:space-between;
            width:100%;
            input{
                text-align:center;
                width:100%;
                font-size:${(props)=>props.theme.lFontSize};
                padding:3vw 0;
                border:none;
            }
        }
        
        button{
            position:relative;
            left:0;
            right:0;
            margin:10vw auto 0;
            display:flex;
            justify-content:center;
            width:25%;
            padding:5px 0;
            background-color:${(props)=>props.theme.border};
            color:${(props)=>props.theme.color};
            font-size:${(props)=>props.theme.sFontSize};
            border:none;
            border:1px solid rgba(255,255,255,0.5);
            border-radius:5px;
        }
    }
`
function VerifyBox ({router,data}:{router:string,data:{username:string,name:string,password:string}}){
    const [error,setError] = useState({isOpen:false,text:""})
    const [verifyCode , setVerifyCode] = useState("")
    const routers = useRouter();
    return(
        <>
         <ErrorMessage state={error}/>
        <VerifyElement>
            <form action={router} method="POST">
                <div className="form-box">
                    <input type="number" min="0" max="9" placeholder="驗證碼" onChange={(e)=>{
                        setVerifyCode(e.target.value)
                    }}/>
                </div>
                <button type="submit" onClick={async (e)=>{
                    e.preventDefault();
                    try{
                        let signConsequence = await fetch(router,{
                            method:"POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json",
                            },
                              mode:"cors",
                              body: JSON.stringify({
                                name:data.name,
                                username:data.username,
                                password:data.password,
                                verifyCode:verifyCode
                              }),
                        })
                        let res = await signConsequence.json()
                        console.log(res)
                        if(res.error){
                            setTimeout(()=>{
                                setError({isOpen:false,text:res.error})
                                routers.push("/signUp")
                            },950)
                            setError({isOpen:true,text:res.error})
                            
                        }else if(res.success){
                            setTimeout(()=>{
                                setError({isOpen:false,text:res.success})
                                routers.push("/login")
                            },950)
                            setError({isOpen:true,text:res.success})
                        }
                    }catch(error){
                        console.log(error)
                    }
                }}>驗證</button>
            </form>
        </VerifyElement>
        </>
       
    )
}


export default function SignUpForm ():JSX.Element{
    return(
      <>
          
         <StyledElement className="signUp-form" />
      </>
     
    )
}