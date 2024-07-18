import { JsSVG } from "../../../../assets/svgIcons";
import { IconButton, Tooltip } from "@mui/material";

const JsToolTip  = () => {
  return (
    <Tooltip
      title="JS"
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
        <JsSVG />
      </IconButton>
    </Tooltip>
  );
};
export default JsToolTip ;
