import { IconButton, Tooltip } from "@mui/material";
import BootstrapSVG from "../../../../assets/svgIcons/BootstrapSVG";

const BootstrapToolTip = () => {
  return (
    <Tooltip
      title="BootStrap"
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
        <BootstrapSVG />
      </IconButton>
    </Tooltip>
  );
};
export default BootstrapToolTip;
