import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
const FormElement = ({className}:{className:string})=>{
    const router = useRouter()
    return(
        <>
         <form action="post" className={className}>
              <Image src="/svg/login-hive.svg" alt={"jot-hive"} width={40} height={40}/>
                    <div className="form-box">
                        <label htmlFor="username">電子信箱: </label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="form-box">
                        <label htmlFor="password">密碼:</label>
                        <input type="text" id="password"/>
                    </div>
                    <button type="submit" onClick={(e)=>{
                        e.preventDefault()
                    }}>登入</button>
        </form>
        <SignUpBox>
            <p>還沒擁有JotHive帳號嗎?<span onClick={()=>{router.push("/signUp")}}>註冊</span></p>
        </SignUpBox>
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
        width:80%;
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
 const SignUpBox = styled.div`
width:85%;
margin:5vw auto 0;
padding:6vw 3.5vw;
background-color:${(props)=>props.theme.background};
border-radius:15px;
p{
    width:fit-content;
    margin:0 auto;
    color:${(props)=>props.theme.color};
    font-size:${(props)=>props.theme.sFontSize};
    letter-spacing:0.1em;
    span{
        color:${(props)=>props.theme.border};
        border-bottom:1px solid ${(props)=>props.theme.border};
        margin-left:0.8vw;
    }
}
`;

export default function LoginForm ():JSX.Element{
    return(
      <>
          
         <StyledElement className="login-form" />
      </>
     
    )
}