
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
        action: {
            active: '#ff5722', // مثال برای رنگ فعال
            selected: 'error.main'
        },

    },
    components: {
        MuiButtonBase: {

        },
        MuiTab: {
            styleOverrides: {

                root: {

                    '&.Mui-selected': {
                        color: "#d79921",
                    },
                    '&.MuiTab-root': {
                        minHeight: 55
                    }
                },
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: "#d79921"
                }
            }
        }
    },
    typography: {
        fontFamily: "Vazir, tahoma ,roboto"
    },


})