import { Avatar, Box, Link, Typography } from "@mui/material";
import AvatarImg from "../../../assets/images/SecondAVATAR.jpg"
import { Telegram, Instagram, GitHub, LinkedIn } from "@mui/icons-material";
import { useContext } from "react";
import context from "../../../context/context";
const avatarSx1 = {
  height: 150,
  width: 150,
  margin: "0 auto",
  display: { xs: "none", md: "block" },
};

const SideberHeader = () => {
  const { themeMode } = useContext(context);
  return (
    <>
      <Avatar src={AvatarImg} sx={avatarSx1}>
        AM
      </Avatar>
      <Typography
        variant="h6"
        sx={{ color: themeMode ? "background.main" : "purple.main" }}
      >
        امیررضا منفرد
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: themeMode ? "background.main" : "purple.main" }}
      >
        توسعه دهنده JS
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link href="https://t.me/amirrezamnf" rel="noreferrer" target="_blank">
          <Telegram
            sx={{ color: themeMode ? "background.main" : "purple.main", mx: 1 }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/a.reza.m.s/"
          rel="noreferrer"
          target="_blank"
        >
          <Instagram
            sx={{ color: themeMode ? "background.main" : "purple.main", mx: 1 }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/a.reza.m.s/"
          rel="noreferrer"
          target="_blank"
        ></Link>
        <Link href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
          <LinkedIn
            sx={{ color: themeMode ? "background.main" : "purple.main", mx: 1 }}
          />
        </Link>
        <Link
          href="https://github.com/amirmonfaredse"
          rel="noreferrer"
          target="_blank"
        >
          <GitHub
            sx={{ color: themeMode ? "background.main" : "purple.main", mx: 1 }}
          />
        </Link>
      </Box>
    </>
  );
};
export default SideberHeader;
