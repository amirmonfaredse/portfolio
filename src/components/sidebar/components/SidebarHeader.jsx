import { Avatar, Box, Typography } from "@mui/material";
import AvatarImg from "../../../assets/images/Avatar.jpg";
import { Telegram, Instagram, GitHub, LinkedIn } from "@mui/icons-material";
const SideberHeader = () => {
  return (
    <>
      <Avatar
        src={AvatarImg}
        sx={{
          height: 150,
          width: 150,
          margin: "0 auto",
          display: { xs: "none", md: "block" },
        }}
      >
        AM
      </Avatar>
      <Typography variant="h6" sx={{ color: "purple.main" }}>
        امیررضا منفرد
      </Typography>
      <Typography variant="caption" sx={{ color: "pink.main" }}>
        توسعه دهنده JS
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Telegram sx={{ color: "orange.main", mx: 1 }} />
        <Instagram sx={{ color: "orange.main", mx: 1 }} />
        <GitHub sx={{ color: "orange.main", mx: 1 }} />
        <LinkedIn sx={{ color: "orange.main", mx: 1 }} />
      </Box>
    </>
  );
};
export default SideberHeader;
