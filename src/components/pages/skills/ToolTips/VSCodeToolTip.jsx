import VSCode from "../../../../assets/svgIcons/programmingSVG/VSCode";
import { IconButton, Tooltip } from "@mui/material";

const VSCodeToolTip = () => {
  return (
    <Tooltip
      title="VS Code"
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
        <VSCode />
      </IconButton>
    </Tooltip>
  );
};
export default VSCodeToolTip;
