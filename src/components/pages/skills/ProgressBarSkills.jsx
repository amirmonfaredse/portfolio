import { Box, LinearProgress, Typography } from "@mui/material";
const boxSx1 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  my: 3,
};
const boxSx2 = {
  minWidth: 35,
  mx: 2,
  display: "flex",
  flexDirection: "row-reverse",
};
const ProgressBarSkills = ({ linearValue, icon }) => {
  return (
    <>
      <Box sx={boxSx1}>
        <Box sx={{ width: "85%", mr: 1 }}>
          <LinearProgress
            color="orange"
            variant="determinate"
            value={linearValue}
            sx={{ height: 8, borderRadius: 2, bgcolor: "background.main" }}
          />
        </Box>
        <Box sx={boxSx2}>
          {icon}
          <Typography
            variant="body2"
            sx={{ color: "pink.main" }}
            alignSelf="center"
          >
            {`${linearValue}%`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ProgressBarSkills;
