import styled from "styled-components";
import Image from "next/image";
const formElement = ({className}:{className:string})=>{
    return(
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
                    }}>送出</button>
        </form>
    )
}


const StyledElement =styled(formElement)`
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
        width:25vw;
        height:6.5vw;
        background-color:${(props)=>props.theme.background};
        color:${(props)=>props.theme.color};
        font-size:${(props)=>props.theme.sFontSize};
        border:none;
        border:1px solid rgba(255,255,255,0.5);
        border-radius:10px;
        outline:none;
        letter-spacing:0.1em;
        
    }
`


export default function LoginForm ():JSX.Element{
    return(
      <>
          
         <StyledElement className="login-form" />
      </>
     
    )
}