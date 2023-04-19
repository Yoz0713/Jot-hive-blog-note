import styled from "styled-components";
import ListItem from "./list";



const listElement = ({className}:{className:string})=>{
    const data = [{
        id:"1",
        title:"以MERN架構設計全端專案-EP1環境設置",
        url:"/post",
        classify:"程式板",
        para:"第一次接觸MERN架構是在剛入行三個月時......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"2",
        title:"跨文化溝通，如何解決多語言溝通中的難題",
        url:"/post",
        classify:"語言板",
        para:"不要害怕離開台灣，語言永遠不是問題的......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"3",
        title:"以經濟學角度看待法律的發展與應用",
        url:"/post",
        classify:"法律板",
        para:"以目前最熱門的打房法切入，法律如何影響......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"4",
        title:"聽力領域:探索預防和早期配戴HA的預後",
        url:"/post",
        classify:"醫學板",
        para:"預防勝於治療，但你知道配戴助聽器也是......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"5",
        title:"以MERN架構設計全端專案-EP1環境設置",
        url:"/post",
        classify:"程式板",
        para:"第一次接觸MERN架構是在剛入行三個月時......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"6",
        title:"跨文化溝通，如何解決多語言溝通中的難題",
        url:"/post",
        classify:"語言板",
        para:"不要害怕離開台灣，語言永遠不是問題的......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"7",
        title:"以經濟學角度看待法律的發展與應用",
        url:"/post",
        classify:"法律板",
        para:"以目前最熱門的打房法切入，法律如何影響......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"8",
        title:"聽力領域:探索預防和早期配戴HA的預後",
        url:"/post",
        classify:"醫學板",
        para:"預防勝於治療，但你知道配戴助聽器也是......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"9",
        title:"以MERN架構設計全端專案-EP1環境設置",
        url:"/post",
        classify:"程式板",
        para:"第一次接觸MERN架構是在剛入行三個月時......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"10",
        title:"跨文化溝通，如何解決多語言溝通中的難題",
        url:"/post",
        classify:"語言板",
        para:"不要害怕離開台灣，語言永遠不是問題的......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"11",
        title:"以經濟學角度看待法律的發展與應用",
        url:"/post",
        classify:"法律板",
        para:"以目前最熱門的打房法切入，法律如何影響......",
        img:"/webp/post-banner-image.webp",
    },{
        id:"12",
        title:"聽力領域:探索預防和早期配戴HA的預後",
        url:"/post",
        classify:"醫學板",
        para:"預防勝於治療，但你知道配戴助聽器也是......",
        img:"/webp/post-banner-image.webp",
    },]
    return(
        <div className={className} >
                {data.map((item,i)=>{
                    return(
                        <ListItem data={item} key={item.id}/>
                    )
                })}
        </div>
    )
}


const StyledList =styled(listElement)`
    width:100%;
    .list-item{
        &:not(:last-child){
            margin-bottom:3vw;
        }
    }
`;



export default function List(){
    return(
       <StyledList className="list"/>
    )
}