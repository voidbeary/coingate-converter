import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#16DFB5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#5022ED",
    },
    text: {
      disabled: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "3.75rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
  },
});
