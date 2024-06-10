import { ThemeProvider, createTheme } from '@mui/material/styles';
import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from "@emotion/react"
import { HelmetProvider, Helmet } from 'react-helmet-async';
import createCache from '@emotion/cache'
import { prefixer } from 'stylis';
import './App.css';
import { Button } from '@mui/material';



// NOTE Create Theme

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: "Vazir,roboto"
  }
})

// NOTE Create RTL cache

const cacneRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
})
const App = () => {
  return (
    <CacheProvider value={cacneRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>امیررضا منفرد</title>
          </Helmet>
          <div className="App">
            <Button variant='contained'>کلیک کن</Button>
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>

  );
}

export default App;
