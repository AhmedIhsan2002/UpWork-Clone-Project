import { StyledFlex } from "@/style/common";
import styled from "styled-components";

export const StyledAdsContainer = styled(StyledFlex)`
  background-color: #008000;
  border-radius: 20px;
  color:#fff;

  div {
    padding: 10px 0;

    p {
      font-size: 16px;
      margin: 15px 0;
      line-height: 1.4;
    }

    a {
      color: var(--white-color);
      background-color: #222;
      padding: 8px 20px;
      font-weight: 500;
      border-radius: 50px;
      text-transform: capitalize;
    }
    button:hover {
        background-color: var(--primary-color);
    }
  }
`;
