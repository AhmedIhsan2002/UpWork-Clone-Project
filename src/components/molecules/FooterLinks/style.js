import styled from "@emotion/styled";
import { StyledGrid250 } from "@/style/common";

export const StyledFooterLinks = styled(StyledGrid250)`
  ul {
    list-style: none;
  }

  li:not(:last-child) {
    margin-bottom: 8px;
  }

  li a {
    color: var(--white-color);
    font-size: 14px;
  }

  li a:hover {
    text-decoration: underline !important;
  }
`;
