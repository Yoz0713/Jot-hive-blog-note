import styled from "styled-components"
const LeaveCommentElement = ({className}:{className:string})=>{
    return(
        <form action="post" className={className}>
                    <div className="form-box">
                        <textarea name="newComment" id="newComment" placeholder="留言板"  cols={30} rows={3}></textarea>
                    </div>
                    <button type="submit">送出</button>
        </form>
    )
}


const StyledElement =styled(LeaveCommentElement)`
display:flex;
flex-direction:column;
    width:100%;
    .form-box{
        width:100%;
        textarea{
            width:100%;
            background-color:${(props)=>props.theme.background};
            color:${(props)=>props.theme.color};
            font-size:${(props)=>props.theme.sFontSize};
            border:none;
            border-bottom:1px solid rgba(255,255,255,0.5);
            padding-bottom:2vw;
            margin-bottom:2vw;
            line-height:1.6;
            &:focus{
                outline:none;
            }
        }
        
    }
    button{
        width:25vw;
        height:6.5vw;
        background-color:${(props)=>props.theme.background};
        color:${(props)=>props.theme.color};
        font-size:${(props)=>props.theme.xsFontSize};
        border:none;
        border:1px solid rgba(255,255,255,0.5);
        border-radius:10px;
        outline:none;
        align-self:flex-end;
        letter-spacing:0.1em;
        
    }
`


export default function LeaveComment ():JSX.Element{
    return(
      <>
          
         <StyledElement className="form-leave-comment" />
      </>
     
    )
}