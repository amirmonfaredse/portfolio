import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    background: {
      main: "#282A36",
      galssy: "#282a36b0",
    },
    currentLine: {
      main: "#44475A",
    },
    foreground: {
      main: "#F8F8F2",
    },

    comment: {
      main: "#373a42",
    },
    darkBlue: {
      main: "#191f5c",
    },
    darkPurple: {
      main: "#2a2139",
    },
    cyan: {
      main: "#8BE9FD",
    },
    green: {
      main: "#50FA7B",
    },
    orange: {
      main: "#FFB86C",
    },
    pink: {
      main: "#FF79C6",
    },
    purple: {
      main: "#BD93F9",
    },
    red: {
      main: "#FF5555",
    },
    yellow: {
      main: "#F1FA8C",
    },
  },
  components: {
    MuiButtonBase: {},
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiTab-root": {
            minHeight: 55,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#FF79C6",
        },
      },
    },
  },
  typography: {
    fontFamily: "Vazir, tahoma ,roboto",
  },
});
export default theme;
