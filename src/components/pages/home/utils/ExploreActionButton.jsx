import { Suspense, useContext } from "react";
import { Box, Fab } from "@mui/material";
import VsCodeSVG from "../../../../assets/svgIcons/programmingSVG/VSCode";
import Context from "../../../../context/context";
import Loading from "../../../utils/Loading";

const ExploreActionButton = () => {
  const { onExploreToggler } = useContext(Context);
  return (
    <Suspense fallback={<Loading />}>
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
          onClick={onExploreToggler}
        >
          <VsCodeSVG />
        </Fab>
      </Box>
    </Suspense>
  );
};
export default ExploreActionButton;
