import styled from "styled-components";
import { StyledBetweenAlignFlex } from "@/style/common";

export const StyledHeaderAuth = styled(StyledBetweenAlignFlex)`
  width: 100%;
  height: 60px;
  padding: 10px 30px;
  position: fixed;
  top: 0;
  background-color: var(--white-color);
  z-index: 1000;

  p,
  span {
    font-size: 14px;
  }

  p {
    color: var(--dark-color);
  }

  span {
    color: var(--primary-color);
    font-weight: 600;
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline !important ;
  }
`;
