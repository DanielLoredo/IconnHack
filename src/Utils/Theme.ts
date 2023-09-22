import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#028262",
      light: "#EDBDC6",
    },
    secondary: {
      main: colors.orange[500],
    },
    white: {
      main: "#ffffff",
      contrastText: "#fff",
    },
    black: {
      main: "#000000",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      '"Inter"',
      "Helvetica",
      "Roboto",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
