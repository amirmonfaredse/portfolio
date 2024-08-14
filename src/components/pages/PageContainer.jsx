import { Suspense, useContext } from "react";

import Grid from "@mui/material/Unstable_Grid2";

import SwipeableViews from "react-swipeable-views";

import { About, Home, Page, MySkills, Project, BeyondCode } from ".";
import { DrawerActionBtn } from "../sidebar";

import context from "../../context/context";
import ContactMeContainer from "./Contact/ContactMeContainer";
import Loading from "../utils/Loading";

const PageContainer = () => {
  const { pageNumber, onPageNumber } = useContext(context);
  return (
    <Suspense fallback={<Loading />}>
      <DrawerActionBtn />
      <Grid xs={12} sm={12} md={9} lg={10} xl={10}>
        <SwipeableViews index={pageNumber} onChangeIndex={onPageNumber}>
          <Page pageNumber={pageNumber} index={0}>
            <Home />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <About />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <MySkills />
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Project />
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <BeyondCode />
          </Page>
          <Page pageNumber={pageNumber} index={5}>
            <ContactMeContainer />
          </Page>
        </SwipeableViews>
      </Grid>
    </Suspense>
  );
};
export default PageContainer;
