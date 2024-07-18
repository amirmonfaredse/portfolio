import { useContext } from "react";

import { MenuRounded } from "@mui/icons-material";

import { Box, Fab } from "@mui/material";
import context from "../../../context/context";

const DrewerActionBtn = () => {
  const { onDrawerToggler } = useContext(context);
  return (
    <Box
      sx={{
        display: {
          position: "absolute",
          sx: "block",
          md: "none",
        },
      }}
    >
      <Fab
        aria-label="sidebar"
        size="small"
        sx={{
          m: 2,
          bgcolor: "background.main",
          color: "purple.main",
        }}
        onClick={onDrawerToggler}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrewerActionBtn;
