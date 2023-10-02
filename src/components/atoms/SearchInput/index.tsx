import { StyledAlignFlex } from "@/style/common";
import React from "react";
import Input from "../Input";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { StyledSearchInput } from "./style.js";
import { PATHS } from "@/constants/path";

const SearchInput = () => {
  return (
    <StyledSearchInput className="search">
      <Input
        type="search"
        placeholder="Search for job"
        name="search"
        imageHidden
      />
      <Link href={PATHS.SEARCH}>
        <SearchIcon sx={{ color: "white" }} />
      </Link>
    </StyledSearchInput>
  );
};

export default SearchInput;
