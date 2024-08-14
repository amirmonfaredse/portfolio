import { HelmetProvider } from "react-helmet-async";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { ThemeProvider } from "@mui/material/styles";

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import Grid from "@mui/material/Unstable_Grid2";
import { Suspense, useContext } from "react";
import Loading from "../utils/Loading";
import Context from "../../context/context";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({ children }) => {
  const { theme } = useContext(Context);
  return (
    <Suspense fallback={<Loading />}>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Grid container sx={{ height: "100vh" }}>
              {children}
            </Grid>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </Suspense>
  );
};

export default MainLayout;
