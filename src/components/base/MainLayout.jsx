import { HelmetProvider } from "react-helmet-async";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import Grid from "@mui/material/Unstable_Grid2";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({ children }) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
