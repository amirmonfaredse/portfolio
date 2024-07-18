import { HtmlSVG } from "../../../../assets/svgIcons";
import { IconButton, Tooltip } from "@mui/material";

const HtmlToolTip  = () => {
  return (
    <>
      <Tooltip
        title="HTML 5"
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
          <HtmlSVG />
        </IconButton>
      </Tooltip>
    </>
  );
};
export default HtmlToolTip ;
