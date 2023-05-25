import { ThemeProvider } from 'styled-components';

const fontSizeTheme={
  xsFontSize:"0.9rem",
  sFontSize:"1.15rem",
  mFontSize:"1.3rem",
  mlFontSize:"1.45rem",
  xlFontSize:"1.65rem",
}
const fontFamily = {
  notoJapan:"'Noto Sans JP', sans-serif",
}
export const lightTheme = {
  ...fontSizeTheme,
  ...fontFamily,
  background: '#E5DC75',
  color: '#553935',
  border:"#553935",
  headerHeight:"15vw",
  footerHeight:"18vw"
};

export const darkTheme = {
  ...fontSizeTheme,
  ...fontFamily,
  background: '#333333',
  color: '#FFFFFF',
  border:"#D4AF37",
  headerHeight:"15vw",
  footerHeight:"18vw"
};

export const Theme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};