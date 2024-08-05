import {  ListItemIcon, ListItemText } from "@mui/material";

const ExploreItem = ({ title, icon, onClickHandler }) => {
  return (
    <>
      <ListItemIcon
        sx={{
          "& .MuiListItemIcon-root": {
            minWidth: 30,
            height: 20,
          },
          "&.MuiListItemIcon-root": {
            minWidth: 30,
          },
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={title}
        sx={{
          color: "foreground.main",
          "& .MuiListItemText-primary": {
            width: 1,
          },
          "& .MuiTypography-root": {
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          },
        }}
      />
    </>
  );
};
export default ExploreItem;
