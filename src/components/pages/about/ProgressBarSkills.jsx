import { Box, LinearProgress } from "@mui/material";
const ProgressBarSkills = ({ children, value, Color }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
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
            variant="buffer"
            value={value}
            color={Color}
            sx={{ height: 10, borderRadius: 2 }}
          />
        </Box>
        {children}
      </Box>
    </>
  );
};
export default ProgressBarSkills;
