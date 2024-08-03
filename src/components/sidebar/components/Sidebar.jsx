import { Divider, Box } from "@mui/material";

import SideberHeader from "./SidebarHeader";
import { Navbar } from "..";

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          textAlign: "center",
          mt: 2,
        }}
      >
        <SideberHeader />
        <Divider variant="middle" color={"cyan.main"} sx={{ my: 2 }} />
        <Navbar />
      </Box>
    </>
  );
};
export default Sidebar;
