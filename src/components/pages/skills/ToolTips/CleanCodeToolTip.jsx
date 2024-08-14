import CleanCodeSVG from "../../../../assets/svgIcons/programmingSVG/CleanCodeSVG";
import { IconButton, Tooltip } from "@mui/material";

const CleanCodeToolTip = () => {
  return (
    <Tooltip
      title="Clean Code"
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
        <CleanCodeSVG />
      </IconButton>
    </Tooltip>
  );
};
export default CleanCodeToolTip;
