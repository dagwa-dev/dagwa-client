import { createTheme } from "@mui/material"
import darkScrollbar from "@mui/material/darkScrollbar"

export default createTheme({
  typography: {
    htmlFontSize: 24,
    fontFamily: [
      "TitilliumWeb",
      "Roboto",
      "-apple-system",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    body1: {
      fontFamily: "Roboto",
    },
    h3: {
      fontFamily: "TitilliumWeb",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "TitilliumWeb",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "TitilliumWeb",
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#d3d3d3",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#3c3c3c",
    },
    text: {
      primary: "#3c3c3c",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },
})
