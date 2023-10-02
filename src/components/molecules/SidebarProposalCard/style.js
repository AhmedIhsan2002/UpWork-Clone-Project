import { StyledSection } from "@/style/common";
import styled from "styled-components";

export const StyledSidebarProposalCard = styled(StyledSection)`

  .title {
    border-bottom: 1px solid var(--gray-200-color);
    padding: 20px 30px 40px;
  }

  h3 {
    font-weight: 500;
  }

  a {
    color: var(--primary-color);
    font-size: 15px;
  }

  a:hover {
    text-decoration: underline !important;
  }

  p {
    color: var(--dark-color);
    font-size: 14px;
  }

  .para {
    padding: 20px 30px;
  }
`;
