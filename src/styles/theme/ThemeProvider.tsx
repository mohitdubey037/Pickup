import * as React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
 

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#FECE3E",
    },
    secondary: {
      main: '#ffffff',
    },
  },
});
 

export const ThemeProviderWraper = (props: { children: React.ReactChild }) => {
  
  return (
    <ThemeProvider theme={outerTheme}>
{props.children}
</ThemeProvider>
  );
};
