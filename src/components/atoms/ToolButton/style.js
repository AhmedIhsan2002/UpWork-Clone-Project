import styled from "styled-components";
import { StyledFlexCenter } from "@/style/common";

export const StyledToolButton = styled(StyledFlexCenter)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid var(--gray-200-color);
  cursor: pointer;
  color: var(--primary-color);
  background-color: var(--white-color);
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;
