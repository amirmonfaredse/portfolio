import { Box } from "@mui/material";
import { LightMode } from "@mui/icons-material";
import theme from "../../../base/theme/theme";

const CustomSwitch = () => {
  const onSwitch = (e) => {
    e.stopPropagation();
    if (theme.palette.mode === "dark") {
      theme.palette.mode = "light";
    } else {
      theme.palette.mode = "dark";
    }
    console.log(theme.palette.mode);
  };
  return (
    <Box
      size="small"
      sx={{
        color: theme.palette.mode === "dark" ? "pink.main" : "background.main",
        display: "flex",
        alignItems: "center",
        mx: 1,
      }}
      onClick={onSwitch}
    >
      <LightMode sx={{ width: 20, height: 20 }} />
    </Box>
  );
};
export default CustomSwitch;
