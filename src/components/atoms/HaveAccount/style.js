import { StyledFlexCenter } from "@/style/common";
import { styled } from "styled-components";

export const StyledHaveAccount = styled(StyledFlexCenter)`
  padding: 20px 0 0;
  p,
  a {
    font-size: 15px;
    font-style: normal;
  }
  p {
    color: var(--gray-color);
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  a {
    color: var(--primary-color);
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.1px;
  }

  @media (max-width: 376px) {
    p,
    a {
      font-size: 14px;
    }
  }
`;
