import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
export const PARA_TOOLS = {
  code: Code,
  header: Header,
  paragraph: Paragraph
};



export const IMAGE_TOOLS = {
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: 'http://localhost:3000/', // Your backend file uploader endpoint
        byUrl: 'http://localhost:3000/', // Your endpoint that provides uploading by Url
      }
    }
  }
};