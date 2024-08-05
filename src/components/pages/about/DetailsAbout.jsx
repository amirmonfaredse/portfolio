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
const gridSx1 = {
  display: "flex",
  justifyContent: "center",
  direction: "ltr",
  flexWrap: {
    xs: "wrap",
    lg: "nowrap",
  },
};
const gridSx2 = {
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
};
const typoSx1 = {
  color: "purple.main",
  display: "flex",
  justifyContent: "left",
  my: 5,
};
const chipSx1 = {
  color: "darkPurple.main",
  bgcolor: "purple.main",
  p: 3,
  fontSize: 18,
  width: 150,
};
const boxSx1 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const boxSx2 = {
  width: 100,
  height: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const DetailsAbout = ({ isXs }) => {
  return (
    <>
      <Grid
        container
        sx={{ width: 1, my: 5, height: "auto", justifyContent: "center" }}
      >
        <Grid xs={12} sm={10} my={5} sx={gridSx1}>
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
        <Grid xs={12} sm={10} md={8} sx={gridSx2}>
          <Typography sx={typoSx1}>
            میاموتو موساشی
            <PersonRounded color="orange" sx={{ mx: 1 }} />
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ width: 1, my: 5, mx: "auto" }}>
        <Grid xs={12} md={6} lg={4}>
          <Box sx={boxSx1}>
            <IsfahanSVG sx={{ width: 200 }} />
            <Chip
              icon={<LocationOnRounded color="background" />}
              label="اصفهان"
              sx={chipSx1}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Box sx={boxSx1}>
            <Box sx={boxSx2} textAlign="center">
              <BirthCakeSVG />
            </Box>
            <Chip
              icon={<CelebrationRounded color="background" />}
              label="1379"
              sx={chipSx1}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={12} lg={4}>
          <Box sx={boxSx1}>
            <Box sx={boxSx2}>
              <StudySVG color="orange" sx={{ fontSize: 60 }} />
            </Box>
            <Chip
              icon={<NoCrashRounded color="background" />}
              label="مکانیک"
              sx={chipSx1}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default DetailsAbout;
