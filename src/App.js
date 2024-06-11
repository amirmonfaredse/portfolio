
//  Configurations : 
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Theme Configs : 
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/ui/theme';
import rtlPlugin from "stylis-plugin-rtl"
import { prefixer } from 'stylis';
import createCache from '@emotion/cache'
import { CacheProvider } from "@emotion/react"

// Components :
import Header from './components/ui/Header';

// CSS Files :
import './App.css';


// Create RTL cache

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
          <Header />
          {[...new Array(200)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>

  );
}

export default App;
