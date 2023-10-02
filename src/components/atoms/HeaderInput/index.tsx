import * as React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { StyledInput } from "./style.js";


export default function CustomizedInputBase() {
  return (
    <StyledInput
      component="form"
      sx={{ padding: "0 0 0 5px", display: "flex", alignItems: "center", width: 400 }}
    >
      <Link href="#">
        <SearchIcon />
      </Link>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        type="search"
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <select>
        <option value="1">Jobs</option>
      </select>
    </StyledInput>
  );
}
