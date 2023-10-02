import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { StyledCheckbox } from "./style.js";

type CheckboxProps = {
  label: string;
  sx: object;
  defaultChecked?: boolean;
};

export default function CheckboxLabels({ label, sx, defaultChecked = false}: CheckboxProps) {
  return (
    <StyledCheckbox>
      {defaultChecked ? (
        <FormControlLabel control={<Checkbox defaultChecked />} label={label} sx={sx} />
      ) : (
        <FormControlLabel control={<Checkbox  />} label={label} sx={sx} />
      )}
      
    </StyledCheckbox>
  );
}
