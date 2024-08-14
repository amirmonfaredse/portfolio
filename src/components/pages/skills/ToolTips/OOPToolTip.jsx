import OOPSVG from "../../../../assets/svgIcons/programmingSVG/OOPSVG";
import { IconButton, Tooltip } from "@mui/material";

const OOPToolTip = () => {
  return (
    <Tooltip
      title="OOP"
      sx={{
        width: "auto",
        color: "purple.main",
        bgcolor: "background.main",
        p: 1,
        mx: 2,
        borderRadius: "50%",
        boxShadow: "1px 2px 3px #333",
      }}
    >
      <IconButton>
        <OOPSVG />
      </IconButton>
    </Tooltip>
  );
};
export default OOPToolTip;
