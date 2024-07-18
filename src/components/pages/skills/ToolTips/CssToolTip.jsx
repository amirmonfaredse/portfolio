import { IconButton, Tooltip } from "@mui/material";
import { CssSVG } from "../../../../assets/svgIcons";

const CssToolTip = () => {
  return (
    <Tooltip
      title="Css 3"
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
        <CssSVG />
      </IconButton>
    </Tooltip>
  );
};
export default CssToolTip;
