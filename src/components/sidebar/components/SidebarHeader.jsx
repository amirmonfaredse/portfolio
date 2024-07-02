import { Avatar, Typography } from "@mui/material";
import AvatarImg from "../../../assets/images/Avatar.jpg";
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
      <Typography variant="h6" sx={{ color: "secondary.light" }}>
        امیررضا منفرد
      </Typography>
      <Typography variant="caption" sx={{ color: "secondary.main" }}>
        برنامه نویس وب
      </Typography>
    </>
  );
};
export default SideberHeader;
