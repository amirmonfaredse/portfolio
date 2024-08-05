import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const CustomListItem = ({ count, children, color }) => {
  return (
    <ListItemButton sx={{ height: 40 }}>
      <ListItemIcon>{count}</ListItemIcon>
      <ListItemText sx={{ color: color }}>{children}</ListItemText>
    </ListItemButton>
  );
};
export default CustomListItem;
