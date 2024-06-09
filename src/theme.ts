import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#125EB0",
    },
  },
  typography: {
    fontFamily: "Arial",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
