import * as React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { H3, H4 } from "../Typography/Typography";
import { Button } from "../Buttons";
import { CustomDialog } from "./style";

interface Props {
  heading?: any;
  content?: any;
  handleConfirm?: () => void;
  open: boolean;
  handleClose?: () => void;
  handleConfirmLabel?: string;
  handleCloseLabel?: string;
}

const AlertDialog: React.FC<Props> = ({
  heading,
  content,
  handleConfirm,
  open,
  handleClose,
  handleConfirmLabel,
  handleCloseLabel,
}) => {
  return (
    <>
      <CustomDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <H3 text={heading} className="heading" />
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <H4 text={content} />
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleConfirm}
            label={handleConfirmLabel}
            size="small"
          ></Button>
          <Button
            onClick={handleClose}
            label={handleCloseLabel}
            size="small"
            secondary
          ></Button>
        </DialogActions>
        
      </CustomDialog>
    </>
  );
};

export default AlertDialog;
