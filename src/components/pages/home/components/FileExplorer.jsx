import { Suspense, useContext } from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  List,
  Typography,
} from "@mui/material";
import { CloseRounded, ExpandMore } from "@mui/icons-material";
import { CustomSwitch } from "..";
import Context from "../../../../context/context";
import Loading from "../../../utils/Loading";

const FileExplorer = ({ children }) => {
  const { expanded, onExpendedToggler, onExploreToggler, themeMode } =
    useContext(Context);

  return (
    <Suspense fallback={<Loading />}>
      <Accordion
        expanded={expanded}
        square
        onChange={onExpendedToggler}
        sx={{
          width: 300,
          height: 1,
          bgcolor: themeMode ? "foreground.main" : "background.main",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            width: 1,
            pl: 6,
            bgcolor: themeMode ? "foreground.main" : "background.main",
            "& .MuiAccordionSummary-content": {
              justifyContent: "space-between",
            },
            display: "flex",
          }}
          aria-controls="fileExplorer"
          id="controlExplorer"
        >
          <Typography>Project Manager</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              height: 20,
            }}
          >
            <CustomSwitch />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              zIndex: 10,
              width: 40,
            }}
            onClick={onExploreToggler}
          >
            <CloseRounded
              sx={{ color: themeMode ? "background.main" : "orange.main" }}
            />
          </Box>
        </AccordionSummary>
        <List
          sx={{
            width: 1,
            height: 1,
            "& .MuiButtonBase-root": {
              width: 1,
              height: 1,
            },
            bgcolor: themeMode ? "foreground.main" : "background.main",
          }}
        >
          {children}
        </List>
      </Accordion>
    </Suspense>
  );
};
export default FileExplorer;
