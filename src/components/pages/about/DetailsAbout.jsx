import { Box, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  FormatQuoteRounded,
  PersonRounded,
  LocationOnRounded,
  CelebrationRounded,
  NoCrashRounded,
} from "@mui/icons-material";
import { IsfahanSVG, BirthCakeSVG, StudySVG } from "../../../assets/svgIcons";
import { Suspense, useContext } from "react";
import Loading from "../../utils/Loading";
import context from "../../../context/context";
const DetailsAbout = ({ isXs }) => {
  const { themeMode } = useContext(context);
  return (
    <Suspense fallback={<Loading />}>
      <Grid
        container
        sx={{ width: 1, my: 5, height: "auto", justifyContent: "center" }}
      >
        <Grid
          xs={12}
          sm={10}
          my={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            direction: "ltr",
            flexWrap: {
              xs: "wrap",
              lg: "nowrap",
            },
          }}
        >
          <FormatQuoteRounded
            sx={{ color: themeMode ? "background.main" : "purple.main" }}
          />
          <Typography
            variant={isXs ? "h6" : "h5"}
            sx={{ color: themeMode ? "background.main" : "purple.main" }}
          >
            زمانی که شما راه و روش را دربرهه ای از زندگی آموختید
          </Typography>
          <Typography
            variant={isXs ? "h6" : "h5"}
            sx={{ color: themeMode ? "foreground.main" : "orange.main", mx: 1 }}
          >
            آن روش را در تمام زندگی
          </Typography>
          <Typography
            variant={isXs ? "h6" : "h5"}
            sx={{ color: themeMode ? "background.main" : "purple.main" }}
          >
            خود خواهید یافت
          </Typography>
          <FormatQuoteRounded
            sx={{ color: themeMode ? "background.main" : "purple.main" }}
          />
        </Grid>
        <Grid
          xs={12}
          sm={10}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "left",
            flexWrap: {
              xs: "wrap",
              lg: "nowrap",
            },
            mx: {
              xs: 2,
              sm: 5,
              md: 10,
              lg: 15,
            },
          }}
        >
          <Typography
            sx={{
              color: themeMode ? "background.main" : "purple.main",
              display: "flex",
              justifyContent: "left",
              my: 5,
            }}
          >
            میاموتو موساشی
            <PersonRounded
              sx={{
                mx: 1,
                color: themeMode ? "background.main" : "orange.main",
              }}
            />
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ width: 1, my: 5, mx: "auto" }}>
        <Grid xs={12} md={6} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IsfahanSVG sx={{ width: 200 }} />
            <Chip
              icon={<LocationOnRounded />}
              label="اصفهان"
              sx={{
                color: themeMode ? "red.main" : "background.main",
                bgcolor: themeMode ? "comment.main" : "purple.main",
                p: 3,
                fontSize: 18,
                width: 150,
              }}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              textAlign="center"
            >
              <BirthCakeSVG />
            </Box>
            <Chip
              icon={<CelebrationRounded />}
              label="1379"
              sx={{
                color: themeMode ? "red.main" : "background.main",
                bgcolor: themeMode ? "comment.main" : "purple.main",
                p: 3,
                fontSize: 18,
                width: 150,
              }}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StudySVG color="orange" sx={{ fontSize: 60 }} />
            </Box>
            <Chip
              icon={<NoCrashRounded />}
              label="مکانیک"
              sx={{
                color: themeMode ? "red.main" : "background.main",
                bgcolor: themeMode ? "comment.main" : "purple.main",
                p: 3,
                fontSize: 18,
                width: 150,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Suspense>
  );
};
export default DetailsAbout;
