import { StyledAlignFlex, StyledBetweenAlignFlex } from "@/style/common";
import ChipSet from "../ChipSet";
import { StyledEditSkillsDialog } from "./style.js";
import React, { useState } from "react";
import ToolButton from "@/components/atoms/ToolButton";
import { Button, Dialog, DialogActions } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { StyledDialog, dialogStyle } from "@/components/organism/Dialog/style";
import EditIcon from "@mui/icons-material/Edit";

const EditSkillsDialog = () => {
  const [open, setOpen] = useState(false);
  const openToggle = () => {
    setOpen(!open);
  };

  const initialChips: string[] = [];
  const maxChips = 15;

  const handleAddChip = (chip: string) => {
    // Handle adding a chip (e.g., you can save it to state, database, etc.)
    // console.log(`Added: ${chip}`);
  };

  const handleDeleteChip = (chip: string) => {
    // Handle deleting a chip (e.g., remove it from state, database, etc.)
    // console.log(`Deleted: ${chip}`);
  };

  return (
    <div>
      <StyledAlignFlex gap="20px">
        <h3>Skills</h3>
        <ToolButton>
          <EditIcon fontSize="small" onClick={() => openToggle()} />
        </ToolButton>
      </StyledAlignFlex>
      <Dialog open={open} PaperProps={{ style: dialogStyle }}>
        <StyledBetweenAlignFlex margin="0 0 3rem">
          <h2>Modify competencies</h2>
          <CloseIcon
            sx={{ cursor: "pointer" }}
            fontSize="medium"
            onClick={openToggle}
          />
        </StyledBetweenAlignFlex>
        <StyledEditSkillsDialog>
          <h3>Skills</h3>
          <div className="box">
            <ChipSet
              initialChips={initialChips}
              maxChips={maxChips}
              onAddChip={handleAddChip}
              onDeleteChip={handleDeleteChip}
            />
          </div>
          <span>Maximum 10 skills.</span>
        </StyledEditSkillsDialog>
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

export default EditSkillsDialog;
