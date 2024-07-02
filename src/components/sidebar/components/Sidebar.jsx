import { Divider, Box, Typography } from "@mui/material";
import { FavoriteRounded } from "@mui/icons-material";

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
        <Divider variant="middle" color={"secondary.dark"} sx={{ my: 2 }} />
        <Navbar />
        <Divider variant="middle" color={"secondary.dark"} sx={{ mt: 2 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            my: 1,
          }}
        >
          <Typography variant="subtitle2" color="info" sx={{ my: 2 }}>
            طراحی شده با{"   "}
            <FavoriteRounded
              sx={{
                fontSize: 15,
                verticalAlign: "top",
                color: "secondary.main",
              }}
            />
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Sidebar;
