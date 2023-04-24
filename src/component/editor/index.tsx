import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { PARA_TOOLS,IMAGE_TOOLS } from "../editor/editorTool"
import styled from "styled-components";
//props
type Props = {
    data?: OutputData;
    onChange(val: OutputData): void;
    holder: string;
    type:string;
  };
  
  const EditorBlock = ({ data, onChange, holder,type }: Props) => {
    //add a reference to editor
    const ref = useRef<EditorJS>();
  
    //initialize editorjs
    useEffect(() => {
      //initialize editor if we don't have a reference
      if (!ref.current) {
        let editor 
        if(type === "para"){
            editor = new EditorJS({
                holder: holder,
                tools: PARA_TOOLS,
                placeholder:"輸入您的內文...",
                data,
                async onChange(api, event) {
                  const data = await api.saver.save();
                  onChange(data);
                },
              });
        }else if (type === "title"){
            editor = new EditorJS({
                holder: holder,
                data,
                placeholder:"輸入您的文章標題",
                async onChange(api, event) {
                  const data = await api.saver.save();
                  onChange(data);
                },
              });
        }else{
            editor = new EditorJS({
                holder: holder,
                tools: IMAGE_TOOLS,
                defaultBlock:"image",
                data,
                async onChange(api, event) {
                  const data = await api.saver.save();
                  onChange(data);
                },
              });
        }
      
        ref.current = editor;
      }
  
      //add a return function handle cleanup
      return () => {
        if (ref.current && ref.current.destroy) {
          ref.current.destroy();
        }
      };
    }, []);
  
  
    return <Editor id={holder} />;
  };
  
export default memo(EditorBlock);


const Editor = styled.section`

  .ce-header,.ce-paragraph{
   
    color:${(props)=>props.theme.color};
  }
  .ce-header{
    font-size:${(props)=>props.theme.mlFontSize};
    font-weight:600;
  }
  .ce-paragraph{
    font-size:${(props)=>props.theme.sFontSize};
  }
  .ce-code{
    textarea{
        background-color:#000;
        color:${(props)=>props.theme.border};
    }
  }
  .ce-toolbar--opened{
    z-index:9999;
  }
`