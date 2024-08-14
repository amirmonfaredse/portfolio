import { Box } from "@mui/material";
import { LightMode } from "@mui/icons-material";
import { useContext } from "react";
import Context from "../../../../context/context";

const CustomSwitch = () => {
  const { themeMode, setThemeMode } = useContext(Context);
  const onSwitch = (e) => {
    e.stopPropagation();
    setThemeMode(!themeMode);
    console.log(themeMode);
  };
  return (
    <Box
      size="small"
      sx={{
        color: themeMode ? "red.main" : "pink.main",
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
