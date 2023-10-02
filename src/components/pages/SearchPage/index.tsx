"use client";
import SearchPageFilterSidebar from "@/components/molecules/SearchPageFilterSidebar";
import {
  StyledGridJobsFilter,
  StyledPage,
  StyledSection,
} from "@/style/common";
import { Container } from "@mui/material";
import BasicTabs from "@/components/molecules/Tabs";

const SearchPage = () => {
  return (
    <StyledPage>
      <Container>
        <StyledGridJobsFilter>
          <SearchPageFilterSidebar />
          <StyledSection>
            <BasicTabs ConvertTabs={false} />
          </StyledSection>
        </StyledGridJobsFilter>
      </Container>
    </StyledPage>
  );
};

export default SearchPage;
