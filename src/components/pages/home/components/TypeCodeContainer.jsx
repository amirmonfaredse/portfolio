import { Suspense, useContext, useRef } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Grow,
} from "@mui/material";
import { ReactSVG } from "../../../../assets/svgIcons";
import { CloseRounded } from "@mui/icons-material";
import Context from "../../../../context/context";
import Loading from "../../../utils/Loading";
const TypeCodeContainer = ({ children }) => {
  const codeContainerEl = useRef(null);
  const { fileName, codeContainerOpen, onCodeContainerToggler, themeMode } =
    useContext(Context);
  return (
    <Suspense fallback={<Loading />}>
      <Grow
        timeout={1000}
        children={codeContainerEl}
        in={codeContainerOpen}
        appear={true}
      >
        <Box
          ref={codeContainerEl}
          sx={{
            width: 350,
            height: 350,
            bgcolor: themeMode ? "foreground.main" : "background.main",
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <List
            disablePadding={true}
            sx={{
              "& .MuiButtonBase-root": {
                height: 40,
                width: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: themeMode ? "foreground.main" : "background.main",
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
                width: 120,
                display: "flex",
                justifyContent: "center",
              },
              "& .MuiListItemText-secondary": {
                minWidth: "auto",
                color: themeMode ? "background.main" : "foreground.main",
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
                  color: themeMode ? "background.main" : "orange.main",
                }}
                secondary={fileName}
              />
              <ListItemIcon
                onClick={() => {
                  onCodeContainerToggler("close");
                }}
              >
                <CloseRounded
                  sx={{ color: themeMode ? "background.main" : "orange.main" }}
                />
              </ListItemIcon>
            </ListItemButton>
          </List>
          <Box
            sx={{
              width: 1,
              height: 1,
              bgcolor: themeMode ? "foreground.main" : "background.main",
            }}
          >
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
        </Box>
      </Grow>
    </Suspense>
  );
};
export default TypeCodeContainer;
