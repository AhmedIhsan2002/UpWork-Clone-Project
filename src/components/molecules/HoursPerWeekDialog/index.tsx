import { OutlinedInput } from "@mui/material";
import { StyledAlignFlex, StyledBetweenAlignFlex } from "@/style/common";
import HelpIcon from "@mui/icons-material/Help";
import { StyledHoursPerWeekDialog } from "./style.js";
import EditIcon from "@mui/icons-material/Edit";
import LinkIcon from "@mui/icons-material/Link";
import ToolButton from "@/components/atoms/ToolButton";
import { Button, Dialog, DialogActions } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledDialog,
  dialogStyle,
} from "@/components/organism/Dialog/style.js";

const HoursPerWeekDialog = () => {
  const [open, setOpen] = useState(false);
  const openToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <StyledAlignFlex gap="10px">
        <h3>$ 50.00/hr</h3>
        <ToolButton>
          <EditIcon fontSize="small" onClick={() => openToggle()} />
        </ToolButton>
        <ToolButton>
          <LinkIcon />
        </ToolButton>
      </StyledAlignFlex>

      <Dialog open={open} PaperProps={{ style: dialogStyle }}>
        <StyledBetweenAlignFlex margin="0 0 3rem">
          <h2>"Update Hourly Salary</h2>
          <CloseIcon
            sx={{ cursor: "pointer" }}
            fontSize="medium"
            onClick={openToggle}
          />
        </StyledBetweenAlignFlex>

        <StyledHoursPerWeekDialog>
          <article>
            <p>
            "Kindly be aware that the updated hourly rate for the role of Full Stack Developer will exclusively affect newly initiated contracts."
            </p>
            <p>
            "The Upwork Service Fee stands at 20% for initiating a contract with a new client."
              <br />
              "When your billings with a client surpass $300, the fee will be reduced to 10%."
            </p>
            <p>
              Your Profile rate: <strong>$50.00/hr</strong>
            </p>
          </article>

          <StyledBetweenAlignFlex className="rate">
            <div>
              <h3>Hourly Rate</h3>
              <p>The total amount visible to the client.</p>
            </div>
            <StyledAlignFlex gap="4px">
              <OutlinedInput
                type="number"
                className="rate__input"
                autoFocus
                inputProps={{ className: "rate__input" }}
                defaultValue={"25.00"}
              />
              <span>/hr</span>
            </StyledAlignFlex>
          </StyledBetweenAlignFlex>

          <StyledBetweenAlignFlex className="rate">
            <h3>20% Upwork Service Fee</h3>
            <StyledAlignFlex gap="4px">
              <OutlinedInput
                type="number"
                className="rate__input fee__input"
                autoFocus
                inputProps={{ className: "rate__input" }}
                defaultValue={"-5.00"}
                disabled
              />
              <span>/hr</span>
            </StyledAlignFlex>
          </StyledBetweenAlignFlex>

          <StyledBetweenAlignFlex className="rate">
            <div>
              <h3>You&rsquo;ll Receive</h3>
              <StyledAlignFlex gap="4px">
                <p>
                  The estimated amount you&rsquo;ll receive after service fees
                </p>
                <HelpIcon sx={{ color: "var(--dark-color)", fontSize: 16 }} />
              </StyledAlignFlex>
            </div>
            <StyledAlignFlex gap="4px">
              <OutlinedInput
                type="number"
                className="rate__input"
                autoFocus={false}
                inputProps={{ className: "rate__input" }}
                defaultValue={"25.00"}
              />
              <span>/hr</span>
            </StyledAlignFlex>
          </StyledBetweenAlignFlex>
        </StyledHoursPerWeekDialog>

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

export default HoursPerWeekDialog;
