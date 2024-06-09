import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#164773",
    },
  },
  typography: {
    fontFamily: "Arial",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
