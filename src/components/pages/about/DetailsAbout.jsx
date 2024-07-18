import { Box, Chip, Grid, Typography } from "@mui/material";
import {
  FormatQuoteRounded,
  PersonRounded,
  LocationOnRounded,
  CelebrationRounded,
  NoCrashRounded,
} from "@mui/icons-material";
import IsfahanSVG from "../../../assets/svgIcons/IsfahanSVG";
import BirthCakeSVG from "../../../assets/svgIcons/BirthCakeSVG";
import StudySVG from "../../../assets/svgIcons/StudySVG";
const DetailsAbout = ({ isXs }) => {
  return (
    <>
      <Grid xs={12} sm={10} md={8} sx={{ width: 1, my: 5, height: "auto" }}>
        <Grid
          item
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
          <FormatQuoteRounded sx={{ color: "purple.main" }} />
          <Typography variant={isXs ? "h6" : "h5"} color="purple.main">
            زمانی که شما راه و روش را دربرهه ای از زندگی آموختید
          </Typography>
          <Typography
            variant={isXs ? "h6" : "h5"}
            sx={{ color: "orange.main", mx: 1 }}
          >
            آن روش را در تمام زندگی
          </Typography>
          <Typography variant={isXs ? "h6" : "h5"} color="purple.main">
            خود خواهید یافت
          </Typography>
          <FormatQuoteRounded sx={{ color: "purple.main" }} />
        </Grid>
        <Grid
          item
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
              color: "purple.main",
              display: "flex",
              justifyContent: "left",
              my: 5,
            }}
          >
            میاموتو موساشی
            <PersonRounded color="orange" sx={{ mx: 1 }} />
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        sm={10}
        md={8}
        sx={{ width: 1, my: 5, mx: "auto" }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IsfahanSVG sx={{ width: 200 }} />
            <Chip
              icon={<LocationOnRounded color="background" />}
              label="اصفهان"
              sx={{
                color: "darkPurple.main",
                bgcolor: "purple.main",
                p: 3,
                fontSize: 18,
                width: 150,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
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
              icon={<CelebrationRounded color="background" />}
              label="1379"
              sx={{
                color: "darkPurple.main",
                bgcolor: "purple.main",
                p: 3,
                fontSize: 18,
                width: 150,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
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
              icon={<NoCrashRounded color="background" />}
              label="مکانیک"
              sx={{
                color: "darkPurple.main",
                bgcolor: "purple.main",
                p: 3,
                fontSize: 18,
                width: 150,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default DetailsAbout;
