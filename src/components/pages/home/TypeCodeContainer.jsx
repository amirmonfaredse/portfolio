import { Box, Typography } from "@mui/material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactSVG } from "../../../assets/svgIcons";
import { CloseRounded } from "@mui/icons-material";
import { useEffect, useRef } from "react";
const TypeCodeContainer = ({ children }) => {
 
  return (
    <>
      <List
        disablePadding={true}
        sx={{
          "& .MuiButtonBase-root": {
            height: 40,
            width: 160,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "comment.main",
          },
          "& .MuiListItemIcon-root": {
            minWidth: "auto",
          },
          "& .MuiListItemText-root": {
            minWidth: 70,
            width: 70,
            m: 0,
          },
          "& .MuiTypography-root": {
            width: 80,
            display: "flex",
            justifyContent: "center",
          },
          "& .MuiListItemText-secondary": {
            minWidth: "auto",
            color: "orange.main",
            mt: 0.5,
          },
          "& .MuiTypography-body1": { width: 80 },
        }}
      >
        <ListItemButton sx={{ height: 1 }}>
          <ListItemIcon>
            <ReactSVG />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: "orange.main",
            }}
            secondary="file.name"
          />
          <ListItemIcon>
            <CloseRounded color="foreground" />
          </ListItemIcon>
        </ListItemButton>
      </List>
      <Box sx={{ width: 1, height: 1, bgcolor: "background.main" }}>
        <List
          sx={{
            "& .MuiListItemText-root": {
              display: "flex",
              justifyContent: "start",
            },
          }}
        >
          {children}
        </List>
      </Box>
    </>
  );
};
export default TypeCodeContainer;
