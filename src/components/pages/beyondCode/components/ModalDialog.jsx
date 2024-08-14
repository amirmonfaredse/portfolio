import { Suspense, useContext } from "react";
import { Dialog, styled } from "@mui/material";
import Context from "../../../../context/context";

import {
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Loading from "../../../utils/Loading";
const ModalDialog = () => {
  const { openDialog, dialogData, onDialogToggler } = useContext(Context);
  const MainContainer = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        onClose={onDialogToggler}
        aria-labelledby="customized-diaolg-title"
        open={openDialog}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            color: "secondary.main",
            border: "none",
          }}
          id="customized-diaolg-title"
        >
          {dialogData.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onDialogToggler}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "secondary.main",
          }}
        >
          <Close />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>{dialogData.about}</Typography>
        </DialogContent>
      </MainContainer>
    </Suspense>
  );
};

export default ModalDialog;
