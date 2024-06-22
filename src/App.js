import { useState } from 'react';

import { Typography } from '@mui/material';

import { SideBar, TabPanel } from './components/sidebar';

import SideBarContainer from './containers/SideBarContainer';
import ContentContainer from './containers/ContentContainer';

import MainLayout from './layouts/MainLayout';

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <MainLayout>
      <SideBarContainer>
        <SideBar value={value} handleChange={handleChange} />
      </SideBarContainer>
      <ContentContainer >
        <TabPanel value={value} index={0} >
          <Typography>صفحه اصلی</Typography>
        </TabPanel>
        <TabPanel value={value} index={1} >
          <Typography>درباره من</Typography>
        </TabPanel>
        <TabPanel value={value} index={2} >
          <Typography>رزومه من</Typography>
        </TabPanel>
        <TabPanel value={value} index={3} >
          <Typography>نمونه کارها</Typography>
        </TabPanel>
        <TabPanel value={value} index={4} >
          <Typography>نظرات</Typography>
        </TabPanel>
        <TabPanel value={value} index={5} >
          <Typography>ارتباط با من</Typography>
        </TabPanel>
      </ContentContainer>
    </MainLayout>
  );
}

export default App;
