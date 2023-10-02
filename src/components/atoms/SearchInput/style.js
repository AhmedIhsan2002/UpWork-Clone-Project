import styled from "styled-components";
import { StyledAlignFlex } from "@/style/common";

export const StyledSearchInput = styled(StyledAlignFlex)`
  margin: 30px 0;

  div {
    border-radius: 10px 0 0 10px;
    border-right: none;
  }

  a {
    background-color: var(--primary-color);
    border-radius: 0 10px 10px 0;
    height: 39px;
    padding: 0 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  a:hover {
    background-color: var(--green-color);
  }
`;
