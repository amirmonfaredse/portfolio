import { ReactSVG } from "../../../../assets/svgIcons";
import { IconButton, Tooltip } from "@mui/material";

const ReactToolTip = () => {
  return (
    <Tooltip
      title="React"
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
        <ReactSVG />
      </IconButton>
    </Tooltip>
  );
};
export default ReactToolTip ;
