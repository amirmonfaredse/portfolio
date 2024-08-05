import { Typography, Box, Button } from "@mui/material";
import { DataObjectRounded } from "@mui/icons-material";

const boxSx1 = {
  direction: "ltr",
  display: "flex",
  flexDirection: "column",
  justifyContent: {
    xs: "right",
    sm: "center",
    md: "right",
  },
  alignItems: {
    xs: "right",
    sm: "center",
    md: "right",
  },
  pl: {
    xs: 0,
    md: 2,
  },
  mt: {
    xs: 2,
    md: 0,
  },
};
const boxSx2 = {
  width: {
    md: 1,
  },
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  flexWrap: {
    sm: "wrap",
  },
  my: {
    xs: 2,
    md: 0,
  },
  gap: {
    xs: 0.5,
    md: 0,
  },
};
const typoSx1 = {
  display: {
    xs: "",
    md: "flex",
  },
  color: "foreground.main",
  mr: 1,
};
const boxSx3 = {
  width: 1,
  display: "flex",
  justifyContent: "left",
};
const btnSx1 = {
  bgcolor: "purple.main",
  color: "darkPurple.main",
  mt: {
    xs: 1,
    md: 5,
  },
  width: {
    xs: 1,
    sm: 200,
  },
  borderRadius: {
    xs: "5px 5px 15px 15px",
    md: "5px 15px 15px 5px",
  },
  "&:hover": {
    bgcolor: "pink.main",
  },
};
const BannerInfo = ({ isUpLg }) => {
  return (
    <Box sx={boxSx1}>
      <Box sx={boxSx2}>
        <Typography
          variant={isUpLg ? "h3" : "h4"}
          sx={{ color: "foreground.main", mr: 1, mb: 1 }}
        >
          برنامه نویس
        </Typography>
        <Typography variant={isUpLg ? "h3" : "h4"} sx={typoSx1}>
          و توسعه دهنده
        </Typography>
        <Typography
          variant={isUpLg ? "h3" : "h4"}
          sx={{ color: "orange.main", ml: 1 }}
        >
          {isUpLg ? "Js" : "Javascript"}
        </Typography>
      </Box>
      <Box sx={boxSx3}>
        <Button
          variant="contained"
          sx={btnSx1}
          startIcon={<DataObjectRounded />}
        >
          مشاهده مهارت ها
        </Button>
      </Box>
    </Box>
  );
};
export default BannerInfo;
