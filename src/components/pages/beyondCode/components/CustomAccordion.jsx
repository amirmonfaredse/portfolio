import { Suspense, useContext, useId } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Loading from "../../../utils/Loading";
import context from "../../../../context/context";
const CustomAccordion = ({ children, title }) => {
  const { themeMode } = useContext(context);
  const id = useId();
  return (
    <Suspense fallback={<Loading />}>
      <Accordion
        sx={{
          direction: "ltr",
          bgcolor: themeMode ? "foreground.main" : "background.main",
          color: themeMode ? "background.main" : "red.main",
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
    </Suspense>
  );
};
export default CustomAccordion;
