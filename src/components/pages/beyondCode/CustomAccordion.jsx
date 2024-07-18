import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useId } from "react";

const CustomAccordion = ({ children, title }) => {
  const id = useId();
  return (
    <Accordion
      sx={{
        direction: "ltr",
        bgcolor: "background.main",
        color: "red.main",
        my: 2,
      }}
    >
      <AccordionSummary
        aria-controls={`panel-content${id}`}
        id={`panel-header${id}`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
export default CustomAccordion;
