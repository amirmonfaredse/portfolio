import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  List,
  Typography,
} from "@mui/material";
import { CloseRounded, ExpandMore } from "@mui/icons-material";
import { CustomSwitch } from "..";

const boxSx2 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  height: 20,
};
const FileExplorer = ({ children, onExploreHandler }) => {
  const [expanded, setExpanded] = useState(true);
  const onExpandedAcc = (e) => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Accordion
        expanded={expanded}
        square
        onChange={onExpandedAcc}
        sx={{
          width: 300,
          height: 1,
          bgcolor: "background.main",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            width: 1,
            pl: 6,
            bgcolor: "background.main",
            "& .MuiAccordionSummary-content": {
              justifyContent: "space-between",
            },
            display: "flex",
          }}
          aria-controls="fileExplorer"
          id="controlExplorer"
        >
          <Typography>Project Manager</Typography>
          <Box sx={boxSx2}>
            <CustomSwitch />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              zIndex: 10,
              width: 40,
            }}
            onClick={onExploreHandler}
          >
            <CloseRounded color="orange" />
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
            bgcolor: "background.main",
          }}
        >
          {children}
        </List>
      </Accordion>
    </>
  );
};
export default FileExplorer;
