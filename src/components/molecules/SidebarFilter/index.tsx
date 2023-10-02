"use client";
import { StyledBetweenFlex } from "@/style/common";
import { useState } from "react";
import { StyledSidbarFilters } from "./style";
import { ReactNode } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type SidebarFiltersProps = {
  title: string;
  children: ReactNode;
};

const SidebarFilters = ({ title, children }: SidebarFiltersProps) => {
  const [showChildren, setShowChildren] = useState(false);

  const toggleShowChildren = () => {
    setShowChildren(!showChildren);
  };

  return (
    <StyledSidbarFilters>
      <StyledBetweenFlex
        onClick={toggleShowChildren}
        className="filter_section"
      >
        <h4>{title}</h4>
        {showChildren ? (
          <KeyboardArrowUpIcon sx={{ color: "green" }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ color: "#00b517" }} />
        )}
      </StyledBetweenFlex>
      {showChildren && children}
    </StyledSidbarFilters>
  );
};

export default SidebarFilters;
