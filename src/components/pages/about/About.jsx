import { Helmet } from "react-helmet-async";

import { Card, CardContent, Avatar, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";

import AboutImg from "../../../assets/images/SecondAVATAR.jpg";
import { CustomStepper, BnnerInfo, DetailsAbout } from "../";
import { Suspense } from "react";
import Loading from "../../utils/Loading";

const cardSx1 = {
  height: {
    xs: "auto",
    lg: "400px",
  },
  borderRadius: "0 0 90px 0",
  backgroundColor: "darkPurple.main",
  position: "relative",
};
const gridSx1 = {
  px: 10,
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  justifyContent: "center",
  flexFlow: {
    xs: "column-reverse",
    md: "row",
  },
  alignItems: "center",
  height: 1,
};
const boxSx1 = {
  display: {
    xs: "none",
    lg: "flex",
  },
  direction: "ltr",
  flexDirection: "column",
  alignItems: "center",
};
const avatarSx = {
  height: 250,
  width: 250,
  m: "0 auto",
  display: "block",
  boxShadow: "0px 0px 20px #000",
  borderRadius: {
    xs: "50%",
    md: "20px 50px 50px 20px",
  },
};
const gridSx2 = {
  width: 1,
  height: "auto",
  px: 2,
};
const About = () => {
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <title>درباره من </title>
        </Helmet>
        <Grid sx={{ bgcolor: "darkPurple.main" }}>
          <Card sx={cardSx1}>
            <CardContent sx={{ height: "100%" }}>
              <Grid container sx={gridSx1}>
                <Grid item xs={0} sm={0} md={0} lg={4}>
                  <Box sx={boxSx1}>
                    <CustomStepper />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={5}>
                  <BnnerInfo isUpLg={isUpLg} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <Avatar src={AboutImg} sx={avatarSx}>
                    AM
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Grid container sx={gridSx2}>
            <DetailsAbout isXs={isXs} />
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};
export default About;
