import { Dialog, styled } from "@mui/material";
import {
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
const ModalDialog = ({ openDialog, dialogData, onClickDialog }) => {
  const MainContainer = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  return (
    <MainContainer
      onClose={onClickDialog}
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
        onClick={onClickDialog}
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
  );
};

export default ModalDialog;
