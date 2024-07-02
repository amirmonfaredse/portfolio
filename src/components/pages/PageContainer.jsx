import { useContext } from "react";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import SwipeableViews from "react-swipeable-views";

import { About, Home, Page } from ".";
import { DrawerActionBtn } from "../sidebar";

import context from "../../context/context";

const PageContainer = () => {
  const { pageNumber, onPageNumber } = useContext(context);
  return (
    <>
      <DrawerActionBtn />
      <Grid
        xs={12}
        sm={12}
        md={9}
        lg={10}
        xl={10}
        sx={{ backgroundColor: "info.main" }}
      >
        <SwipeableViews index={pageNumber} onChangeIndex={onPageNumber}>
          <Page pageNumber={pageNumber} index={0}>
            <Home />
          </Page>
          <Page pageNumber={pageNumber} index={1}>
            <About />
          </Page>
          <Page pageNumber={pageNumber} index={2}>
            <Typography>رزومه من</Typography>
          </Page>
          <Page pageNumber={pageNumber} index={3}>
            <Typography>نمونه کارها</Typography>
          </Page>
          <Page pageNumber={pageNumber} index={4}>
            <Typography>نظرات</Typography>
          </Page>
          <Page pageNumber={pageNumber} index={5}>
            <Typography>ارتباط با من</Typography>
          </Page>
        </SwipeableViews>
      </Grid>
    </>
  );
};
export default PageContainer;
