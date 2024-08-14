import NextSVG from "../../../../assets/svgIcons/programmingSVG/NextSVG";
import { IconButton, Tooltip } from "@mui/material";

const NextToolTip = () => {
  return (
    <Tooltip
      title="Next.js"
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
        <NextSVG />
      </IconButton>
    </Tooltip>
  );
};
export default NextToolTip;
