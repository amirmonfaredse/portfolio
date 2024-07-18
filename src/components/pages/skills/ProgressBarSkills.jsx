import { Box, LinearProgress, Typography } from "@mui/material";
const ProgressBarSkills = ({ linearValue, icon }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 3,
        }}
      >
        <Box
          sx={{
            width: "85%",
            mr: 1,
          }}
        >
          <LinearProgress
          color="orange"
            variant="determinate"
            value={linearValue}
            sx={{ height: 8, borderRadius: 2, bgcolor: "background.main" }}
          />
        </Box>
        <Box
          sx={{
            minWidth: 35,
            mx: 2,
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
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
