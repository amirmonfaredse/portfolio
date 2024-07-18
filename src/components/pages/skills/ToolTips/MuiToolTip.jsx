import MuiSVG from "../../../../assets/svgIcons/MuiSVG";
import { IconButton, Tooltip } from "@mui/material";

const MuiToolTip  = () => {
  return (
    <Tooltip
      title="MUI"
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
        <MuiSVG />
      </IconButton>
    </Tooltip>
  );
};
export default MuiToolTip ;
