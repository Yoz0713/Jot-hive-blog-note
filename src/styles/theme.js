import { ThemeProvider } from 'styled-components';

export const lightTheme = {
  background: '#E5DC75',
  color: '#553935',
  border:"#553935",
  headerHeight:"15vw"
};

export const darkTheme = {
  background: '#333333',
  color: '#FFFFFF',
  border:"#E5DC75",
  headerHeight:"15vw"
};

export const Theme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};