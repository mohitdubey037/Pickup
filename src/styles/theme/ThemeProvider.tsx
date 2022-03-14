import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FECE3E",
    },
    secondary: {
      main: "#000000",
      light: "#ffffff",
    },
  },
});

export const ThemeProviderWraper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
