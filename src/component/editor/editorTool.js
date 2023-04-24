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
        byFile: 'http://localhost:3030/postImage', // Your backend file uploader endpoint
        byUrl: 'http://localhost:3030/postImage', // Your endpoint that provides uploading by Url
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