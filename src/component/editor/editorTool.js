import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
import { checkEnvironment } from "../lib/checkEnvironment";
export const PARA_TOOLS = {
  code: Code,
  header: Header,
  paragraph: Paragraph
};
const apiRoute = checkEnvironment("/postImage").api
export const IMAGE_TOOLS = {
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile:apiRoute, // Your backend file uploader endpoint
        byUrl:apiRoute, // Your endpoint that provides uploading by Url
      },
      field:"image",
      types:"image/*",
      onUploadResponse: (response, img) => {
        // 获取返回结果中的图片路径
        const imagePath = response.file.url;
        // 将上传成功后的图片预览到页面上
        img.src = imagePath;
      }
    }
  }
};

// byFile: 'https://jot-hive-server.herokuapp.com//postImage', 
// byUrl: 'https://jot-hive-server.herokuapp.com//postImage',