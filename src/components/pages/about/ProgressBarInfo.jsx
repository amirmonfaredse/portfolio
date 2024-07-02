import { Box, Typography } from "@mui/material";

const ProgressBarInfo = ({ children }) => {
  return (
    <>
      <Box sx={{ minWidth: 35, mx: 2 }}>
        <Typography variant="body2" color="scondary">
          {children}
        </Typography>
      </Box>
    </>
  );
};
export default ProgressBarInfo;
