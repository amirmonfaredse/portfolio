import { Divider, Box } from "@mui/material";

import SideberHeader from "./SidebarHeader";
import { Navbar } from "..";
import { useContext } from "react";
import context from "../../../context/context";

const Sidebar = () => {
  const { themeMode } = useContext(context);
  return (
    <>
      <Box
        sx={{
          height: 1,
          justifyContent: "center",
          textAlign: "center",
          mt: {
            xs: 0,
            md: 2,
          },
          
          bgcolor: themeMode ? "foreground.main" : "background.main",
        }}
      >
        <SideberHeader />
        <Divider variant="middle" color="cyan.main" sx={{ my: 2 }} />
        <Navbar />
      </Box>
    </>
  );
};
export default Sidebar;
