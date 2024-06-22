import { HelmetProvider, Helmet } from 'react-helmet-async';
import { CacheProvider } from "@emotion/react"
import createCache from '@emotion/cache'

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

import rtlPlugin from "stylis-plugin-rtl"
import { prefixer } from 'stylis';

import Grid from "@mui/material/Unstable_Grid2"

const cacneRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})
const MainLayout = ({ children }) => {
    return (
        <CacheProvider value={cacneRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>امیررضا منفرد</title>
                    </Helmet>
                    {/* Grid System */}
                    <Grid container sx={{ height: '100vh' }}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>

    )
}

export default MainLayout;