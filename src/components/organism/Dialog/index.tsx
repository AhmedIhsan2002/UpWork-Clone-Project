import { Button, Dialog, DialogActions } from "@mui/material";
import React, { useState } from "react";
import { StyledDialog } from "./style.js";
import { dialogStyle } from "./style";
import { StyledAlignFlex, StyledBetweenAlignFlex } from "@/style/common";
import CloseIcon from "@mui/icons-material/Close";

// type DialogProps = {
//   children: ReactNode;
// }

// const DialogCard = ({ children }: DialogProps) => {
const DialogCard = () => {
  const [open, setOpen] = useState(false);
  const openToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Dialog open={open} PaperProps={{ style: dialogStyle }}>
      <StyledBetweenAlignFlex margin="0 0 3rem">
        <h2>Change Hourly Rate</h2>
        <CloseIcon
          sx={{ cursor: "pointer" }}
          fontSize="medium"
          onClick={openToggle}
        />
      </StyledBetweenAlignFlex>

        <StyledDialog>
          <DialogActions>
            <StyledAlignFlex gap="10px" margin="25px 0 0">
              <Button onClick={() => openToggle()} variant="contained">
                Cancel
              </Button>
              <Button onClick={() => {}} variant="contained">
                Save
              </Button>
            </StyledAlignFlex>
          </DialogActions>
        </StyledDialog>
      </Dialog>
    </div>
  );
};

export default DialogCard;
