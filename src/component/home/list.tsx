import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

interface listData {
    className?:string,
    data:{
        id:string,
        title:string,
        url:string,
        classify:string,
        para:string,
        img:string,
        author:{
            photo:string,
            name:string,
        }
    }
}

const ListElement = ({className,data}:listData)=>{
    const router =useRouter()
  
   
    return(
        <div className={className} onClick={()=>router.push(data.url)} >
                <div className="classify">
                    <p>{data.classify}</p>
                </div>
                <div className="post-author">
                    <div className="author-photo">
                    <Image  src={data.author.photo}  alt="title-image" width={36} height={36}/>
                    </div>
                    <div className="author-name">
                        <p>{data.author.name}</p>
                    </div>
                </div>
                <div className="title">
                    <p>{data.title}</p>
                </div>
                <div className="para">
                    <p>{data.para}</p>
                </div>
                <Image src={data.img} alt="list-image" width={480} height={360} loading="eager"/>
        </div>
    )
}


const StyledList =styled(ListElement)`
    position:relative;
      width:100%;
      padding:3vw 4vw;
      background-color:${(props)=>props.theme.background};
      .classify,.para{      
        margin-bottom:1vw;
        p{
            color:#fff;
            font-size:${(props)=>props.theme.xsFontSize};
            letter-spacing:0.1em;
        }

      }
      .post-author{
            display:flex;
            align-items:center;
            margin:2vw 0;
            .author-photo{
                width:8vw;
                height:8vw;
                border-radius:50%;
                border:1px solid #ccc;
                margin-right:1.6vw;
                img{
                    width:100%;
                    height:100%;
                    object-cover:cover;
                    object-position:center center;
                }
            }
            .author-name{
                font-size:${(props)=>props.theme.sFontSize};
                color:#fff;
                letter-spacing:0.05em;
            }
      }
      .title{
        width:80%;
        margin-bottom:1vw;
        p{
            color:#fff;
            font-size:${(props)=>props.theme.sFontSize};
            letter-spacing:0.2em;
        }
      }
      .para{
        margin:0;
        p{
            color:#999999;
        }
      }
      > img{
        position:absolute;
        top:0;
        bottom:0;
        margin:auto 0;
        right:5vw;
        width:14vw;
        height:12vw;
        object-fit:cover;
        object-position:center center;
      }
`;



export default function ListItem({data}:listData){
    return(
       <StyledList className="list-item" data={data} />
    )
}



