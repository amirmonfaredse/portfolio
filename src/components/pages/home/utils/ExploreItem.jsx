import { ListItemIcon, ListItemText } from "@mui/material";
import { Suspense, useContext } from "react";
import Loading from "../../../utils/Loading";
import context from "../../../../context/context";

const ExploreItem = ({ title, icon }) => {
  const { themeMode } = useContext(context);
  return (
    <Suspense fallback={<Loading />}>
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
          color: themeMode ? "background.main" : "foreground.main",
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
    </Suspense>
  );
};
export default ExploreItem;
