import { Box, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= linearValue ? linearValue : prevProgress + 0.1
      );
      return () => {
        clearInterval(timer);
      };
    });
  }, []);
  return (
    <>
      <Box sx={boxSx1}>
        <Box sx={{ width: "85%", mr: 1 }}>
          <LinearProgress
            color="orange"
            variant="determinate"
            value={progress}
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
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ProgressBarSkills;
