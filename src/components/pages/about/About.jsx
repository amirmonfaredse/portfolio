import { Suspense, useContext } from "react";
import { Helmet } from "react-helmet-async";
import Context from "../../../context/context";
import { Card, CardContent, Avatar, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import AboutImg from "../../../assets/images/SecondAVATAR.jpg";
import { BnnerInfo, DetailsAbout } from "../";
import Loading from "../../utils/Loading";

import RoadSVG from "../../../assets/svgIcons/RoadSVG";
const About = () => {
  const { isUpLg, isXs, themeMode } = useContext(Context);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Helmet>
          <title>درباره من </title>
        </Helmet>
        <Grid
          container
          sx={{ bgcolor: themeMode ? "purple.main" : "darkPurple.main" }}
        >
          <Card
            sx={{
              width: 1,
              height: {
                xs: "auto",
                lg: "400px",
              },
              borderRadius: "0 0 90px 0",
              bgcolor: themeMode ? "foreground.main" : "darkPurple.main",
              position: "relative",
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Grid
                container
                sx={{
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
                }}
              >
                <Grid xs={0} sm={0} md={0} lg={4}>
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        lg: "flex",
                      },
                      direction: "ltr",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <RoadSVG />
                  </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={5}>
                  <BnnerInfo isUpLg={isUpLg} />
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={3}>
                  <Avatar
                    src={AboutImg}
                    sx={{
                      height: 250,
                      width: 250,
                      m: "0 auto",
                      display: "block",
                      boxShadow: "0px 0px 20px #000",
                      borderRadius: {
                        xs: "50%",
                        md: "20px 50px 50px 20px",
                      },
                    }}
                  >
                    AM
                  </Avatar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Grid
            sx={{
              width: 1,
              height: "auto",
              px: 2,
            }}
          >
            <DetailsAbout isXs={isXs} />
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};
export default About;
