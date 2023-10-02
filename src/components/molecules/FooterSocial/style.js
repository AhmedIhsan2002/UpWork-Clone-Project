import styled from "styled-components";
import { StyledBetweenAlignFlex } from "@/style/common";

export const StyledFooterSocial = styled(StyledBetweenAlignFlex)`
  color: var(--white-color);
  margin: 40px 0 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--white-color);

  span {
    font-size: 15px;
  }

  a {
    color: var(--white-color);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    background-color: var(--green2-color);
  }
`;
