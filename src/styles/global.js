import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html {
  box-sizing: border-box;
  font-size:3.5vw;
}
body{
    margin:0;
    padding:0;
    background-color:#222222;
    padding: ${(props) => props.theme.headerHeight} 0 ${(props) => props.theme.footerHeight};
}

`;