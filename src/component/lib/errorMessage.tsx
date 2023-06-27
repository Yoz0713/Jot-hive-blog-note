import styled from "styled-components";

export default function ErrorMessage({state}:{state:any}){
    return(
        <Error style={state.isOpen ? {opacity:1,pointerEvents:"auto"}: {}}>
            <div className="paraBox" style={state.isOpen ? {transform: "translateY(0)",opacity:1}: {}}>
            <p >{state.text}</p>
            </div>
        </Error>
    )
}

const Error = styled.div`
display:flex;
justify-content:center;
align-items:center;
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:21;
    margin:auto;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.65);
    pointer-events:none;
    opacity:0;
    transition:0.3s;
    .paraBox{
        width:70%;
        transform:translateY(25px);
        opacity:0;
        transition:0.5s;
        padding:15px 0;
        border:2px solid #fff;
        box-shadow:0 0 6px 0px #fff;
        background-color:${(props)=>props.theme.border};
        transition-delay:0.15s;
        border-radius:15px;
        p{
            width:100%;
            text-align:center;
            color:${(props)=>props.theme.color};
            font-size:${(props)=>props.theme.mlFontSize};
            letter-spacing:0.1em;
        }
    }
   
`;