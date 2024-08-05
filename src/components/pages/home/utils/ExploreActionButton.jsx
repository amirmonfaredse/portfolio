import { Box, Fab } from "@mui/material";
import VsCodeSVG from "../../../../assets/svgIcons/programmingSVG/VSCode";

const ExploreActionButton = ({ onExploreHandler }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
      }}
    >
      <Fab
        aria-label="explore"
        size="small"
        sx={{
          m: 2,
          p: 3,
          bgcolor: "transparent",
        }}
        onClick={onExploreHandler}
      >
        <VsCodeSVG />
      </Fab>
    </Box>
  );
};
export default ExploreActionButton;
