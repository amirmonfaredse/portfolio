import { tooltipClasses } from "@mui/material/Tooltip";

export const boxSx1 = {
  direction: "ltr",
  m: 5,
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
};
export const cardActionSx1 = {
  bgcolor: "background.main",
  direction: "rtl",
  position: "relative",
};
export const linkSx1 = {
  fontSize: 15,
  border: "1px solid",
  p: 1,
  ml: 2,
  mt: 4,
  borderRadius: 2,
  position: "absolute",
};
export const toolTipObject = {
  popper: {
    sx: {
      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
        {
          marginTop: "0px",
        },
      [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
        {
          marginBottom: "0px",
        },
      [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
        {
          marginLeft: "0px",
        },
      [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
        {
          marginRight: "0px",
        },
    },
  },
};
