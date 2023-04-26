import styled from "styled-components"
import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useState } from "react";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const EditorBlock = dynamic(() => import("../editor/index"), {
  ssr: false,
});

const NewPostWrapperElement = ({className}:{className:string})=>{
    const [image, setImage] = useState<OutputData>();
    const [para, setPara] = useState<OutputData>();
    const [title, setTitle] = useState<OutputData>();
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 將編輯器數據作為請求主體中的一個屬性發送到後端
        fetch("http://localhost:3030/post", {
          method: "POST",
          body: JSON.stringify({
            image:JSON.stringify(image),
            para:JSON.stringify(para),
            title:JSON.stringify(title),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Response data:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
    return(
        <section className={className}>
            <form action="post" onSubmit={handleFormSubmit}>
            <div className="edit-title" >
                <h2>文章標題</h2>
            <EditorBlock data={title} onChange={setTitle} type="title" holder="editor-title" />
            </div>
            <div className="edit-banner" >
                <h2>標題背景圖</h2>
            <EditorBlock data={image} onChange={setImage} type="image" holder="editor-banner" />
            </div>
           
            <div className="edit-content" >
                <h2>編輯內文</h2>
                <EditorBlock data={para} onChange={setPara} type="para" holder="editor-content" />
            </div>
            <button className="submit" type="submit" onClick={()=>console.log(image,para,title)}>
                儲存
            </button>
            </form>
             
        </section>
    )
}


const StyledNewPostWrapper = styled(NewPostWrapperElement)`
    form > div{
        background-color:${(props)=>props.theme.background};
        border-radius:5px;
        padding:1.5vw 5%;
        h2{
            color:${(props)=>props.theme.color};
            font-size:${(props)=>props.theme.mlFontSize};
        }
    }
    .edit-banner{
        width:100%;
        .codex-editor__redactor{
            padding:0 !important;
        }
        .ce-toolbar{
            display:none;
          }
          .image-tool__caption{
            display:none;
          }
    }
    .edit-title{
        [data-item-name="paragraph"] {
            display: none;
          }
          .ce-paragraph{
            font-size:${(props)=>props.theme.xlFontSize};
          }
          .ce-toolbar{
            display:none;
          }
          .codex-editor__redactor{
            padding:0 !important;
        }
    }
    .submit{
        position:fixed;
        right:0vw;
        top:2.2vw;
        z-index:30;
        width:20vw;
        height:10vw;
        background-color:transparent;
        color:${(props)=>props.theme.color};
        font-size:${(props)=>props.theme.sFontSize};
        border:none;
    }
`


export default function NewPostConatiner(){
    return(
        <StyledNewPostWrapper className="new-post-container"/>
    )
        
   
}