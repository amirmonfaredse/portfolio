import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ width: 1, height: 1 }}>
      <CircularProgress color="pink.main" />
    </Box>
  );
};
export default Loading;
