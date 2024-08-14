import { Drawer } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import Context from "../../context/context";
import { Sidebar } from "./";
const SidebarViewManager = () => {
  const { onDrawerToggler, sideBarOpen, isDownMd, themeMode } =
    useContext(Context);
  return (
    <>
      {isDownMd ? (
        <Drawer
          open={sideBarOpen}
          variant="temporary"
          onClose={onDrawerToggler}
          sx={{
            "& .MuiDrawer-paper": {
              width: 320,
              bgcolor: themeMode ? "foreground.main" : "background.main",
            },
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <Sidebar />
        </Drawer>
      ) : (
        <Grid
          xs={0}
          sm={0}
          md={3}
          lg={2}
          xl={2}
          sx={{
            bgcolor: themeMode ? "foreground.main" : "background.main",
            height: "100vh",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Sidebar />
        </Grid>
      )}
    </>
  );
};
export default SidebarViewManager;
