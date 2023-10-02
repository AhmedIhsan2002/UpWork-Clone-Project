import { Link } from "@mui/material";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: var(--primary-color);
  font-size: 15px;

  &:hover {
    text-decoration: underline !important;
  }
`;
