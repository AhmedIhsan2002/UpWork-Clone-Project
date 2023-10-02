import { StyledBetweenAlignFlex } from "@/style/common";
import styled from "styled-components";

export const StyledSidebarLink = styled(StyledBetweenAlignFlex)`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--gray-200-color);
  }

  a {
    color: var(--dark-color);
    width: 100%;
    background-color: var(--white-color);
  }

  a:hover {
    background-color: var(--gray-300-color);
  }

  a div {
    padding: 20px 30px;
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
  }
`;
