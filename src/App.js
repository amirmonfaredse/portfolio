import {  useState } from "react";
import { Helmet } from "react-helmet-async";

import MainLayout from "./components/base/MainLayout";
import { PageContainer } from "./components/pages";
import MainContext from "./context/context";
import { SidebarViewManager } from "./components/sidebar";

const App = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onPageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };
  const onDrawerToggler = () => {
    setDrawerOpen(!drawerOpen);
  };

 

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        onPageNumber,
        onDrawerToggler,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout>
        <Helmet>
          <title>امیررضا منفرد</title>
        </Helmet>
        <SidebarViewManager />
        <PageContainer />
      </MainLayout>
    </MainContext.Provider>
  );
};

export default App;
