"use client";
import { StyledAlignFlex } from "@/style/common";
import SidebarFilters from "../SidebarFilter";
import { StyledFilterContent } from "./style";
import Input from "@/components/atoms/Input";
import {
  CLIENT_HISTORY,
  CLIENT_INFO,
  CONNECTS_NEEDED,
  CONTRACT_HIRE,
  EXPERIENCE_LEVEL,
  HOURS_PER_WEEK,
  JOB_TYPE,
  NUMBER_PROPOSAL,
  PROJECT_LENGTH,
} from "@/mock/SidebarFilter";
import CheckboxLabels from "@/components/atoms/Checkbox";
import MinimumDistanceSlider from "@/components/atoms/FilterSlider";
import SearchDropdown from "../SearchDropdown";
import { useState } from "react";

const options = [
  "Services in Finance and Consulting",
"Accounting and Bookkeeping Services",
"Financial Strategy and Planning",
"Consulting and Analysis in Management",
"Other Services in Accounting and Consulting",
"Individual and Professional Coaching",
"Talent Acquisition and Human Resources"
];

const SearchPageFilterSidebar = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    if (query === "") {
      setSearchResults([]);
      return;
    }

    const filteredOptions = options.filter((option) => option.includes(query));
    setSearchResults(filteredOptions);
  };
  return (
    <StyledFilterContent>
      <h3>Filter By</h3>
      <SidebarFilters title="Category">
        <SearchDropdown options={options} onSearch={handleSearch} />
        {searchResults.map((result) => (
          <StyledAlignFlex gap="10px" key={result}>
            <CheckboxLabels label={result} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>

      <SidebarFilters title="Skill Proficiency">
        {EXPERIENCE_LEVEL.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <CheckboxLabels label={type} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>

      <SidebarFilters title="Job type">
        <StyledAlignFlex gap="10px">
          <CheckboxLabels label="Hourly (25424)" sx={{ marginTop: "15px" }} />
        </StyledAlignFlex>
        <MinimumDistanceSlider />
        {JOB_TYPE.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <CheckboxLabels label={type} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>

      <SidebarFilters title="Quantity of Bids proposals">
        {NUMBER_PROPOSAL.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <CheckboxLabels label={type} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>

      <SidebarFilters title="Client info">
        {CLIENT_INFO.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <CheckboxLabels label={type} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>

      <SidebarFilters title="Client history">
        {CLIENT_HISTORY.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <CheckboxLabels label={type} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>

      <SidebarFilters title="Project length">
        {PROJECT_LENGTH.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <CheckboxLabels label={type} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>

      <SidebarFilters title="Hours per week">
        {HOURS_PER_WEEK.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <CheckboxLabels label={type} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>

      <SidebarFilters title="Connects needed">
        {CONNECTS_NEEDED.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <CheckboxLabels label={type} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>

      <SidebarFilters title="Contract to hire">
        {CONTRACT_HIRE.map(({ id, type }) => (
          <StyledAlignFlex gap="10px" key={id}>
            <CheckboxLabels label={type} sx={{ marginTop: "15px" }} />
          </StyledAlignFlex>
        ))}
      </SidebarFilters>
    </StyledFilterContent>
  );
};

export default SearchPageFilterSidebar;
