import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { StyledSelect } from "./style.js";

type selectProps = {
  option1: string;
  option2: string;
  option3: string;
  option4: string;
};

export default function SelectSmall({
  option1,
  option2,
  option3,
  option4,
}: selectProps) {
  const [counrty, setCountry] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  return (
    <StyledSelect sx={{ minWidth: "100%", border: "none" }} size="small">
      <Select
        value={counrty}
        onChange={handleChange}
        displayEmpty
        sx={{ border: "none" }}
      >
        <MenuItem value="">
          <em>{option1}</em>
        </MenuItem>
        <MenuItem value={10}>{option2}</MenuItem>
        <MenuItem value={20}>{option3}</MenuItem>
      </Select>
    </StyledSelect>
  );
}
