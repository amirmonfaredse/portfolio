import {
  Accordion,
  AccordionSummary,
  Box,
  List,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import CustomSwitch from "../pages/home/CustomSwitch";

const boxSx2 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  height: 20,
};
const FileExplorer = ({ children }) => {
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
        sx={{ width: 1, bgcolor: "background.main" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            bgcolor: "background.main",
            "& .MuiAccordionSummary-content": {
              justifyContent: "space-between",
            },
          }}
          aria-controls="fileExplorer"
          id="controlExplorer"
        >
          <Typography>How You Doing?</Typography>
          <Box sx={boxSx2}>
            <CustomSwitch />
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
