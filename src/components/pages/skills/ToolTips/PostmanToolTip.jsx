import PostmanSVG from "../../../../assets/svgIcons/programmingSVG/PostmanSVG";
import { IconButton, Tooltip } from "@mui/material";

const PostmanToolTip = () => {
  return (
    <Tooltip
      title="Postman"
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
        <PostmanSVG />
      </IconButton>
    </Tooltip>
  );
};
export default PostmanToolTip;
