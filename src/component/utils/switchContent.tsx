import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { switchList } from '../redux/features/switchContent'
const Element = ({ className }:{className:string}) => {
  interface ListState{
    list:{
      content:string
    }
  }
  const list = useSelector((state:ListState) => state.list);
  const dispatch = useDispatch()
  const data = [{
    type:"Recommand",
    text:"熱門"
  },{
    type:"Followed",
    text:"追蹤"
  },{
    type:"Posted",
    text:"已發布"
  },{
    type:"Note",
    text:"筆記"
  }]
    return (
        <ul id="switch-main-content" className={className}>
          {data.map((item,i)=>{
            return(
              <li key={item.type} className={`${list.content == item.type && "active"}`} onClick={()=>{
                dispatch(switchList(item.type))
              }}>{item.text}</li>
            )
          })}
    </ul>
    );
  };

  const StyledElement = styled(Element)`
  display:flex;
  width: 100%;
  margin:0 auto;
  height:100%;
  align-items:center;
  color: ${(props) => props.theme.color};
  li{
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    list-style:none;
    width:25%;
    height:100%;
    font-size:${(props)=>props.theme.sFontSize};
    letter-spacing:0.25em;
    font-weight:600;
    
    &::after{
        content:"";
        display:block;
        position:absolute;
        left:0;
        right:0;
        margin:0 auto;
        bottom:0;
        width:0%;
        height:6%;
        background-color:${(props) => props.theme.border};
        transition:0.3s;
    }
  }
  .active{
    &::after{
        width:100%;
    }
  }
`;

export default function SwitchMainContent(){
    return(
       <StyledElement className="switch-main-content"/>
    )
}