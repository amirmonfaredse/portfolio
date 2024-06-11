
import { createTheme } from "@mui/material";

// Create Theme

export const theme = createTheme({
    direction: 'rtl',
    palette: {
        mode: "light",
        common: {
            black: "#333",
            white: '#000'
        },
        primary: {
            main: "#458588"
        },
        secondary: {
            main: "#d79921"
        },
        success: {
            main: "#3c3836"
        },
        error: {
            main: "#cc241d"
        },

        info: {
            main: "#8ec07c"
        },


    },
    typography: {
        fontFamily: "Vazir, tahoma ,roboto"
    }
})