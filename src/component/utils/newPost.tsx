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
    return(
        <section className={className}>
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
           
        </section>
    )
}


const StyledNewPostWrapper = styled(NewPostWrapperElement)`
    > div{
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
`


export default function NewPostConatiner(){
    return(
        <StyledNewPostWrapper className="new-post-container"/>
    )
        
   
}