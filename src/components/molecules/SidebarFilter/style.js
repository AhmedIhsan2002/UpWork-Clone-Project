import { styled } from "styled-components";

export const StyledSidbarFilters = styled.div`
  padding: 0 2px 10px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--gray-300-color);
  }

  h4 {
    font-size: 15px;
    font-weight: 500;
  }

  .filter_section {
    padding: 12px 0px 3px;
    cursor: pointer;
  }
`;
