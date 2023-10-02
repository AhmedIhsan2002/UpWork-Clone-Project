import { styled } from "styled-components";

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  /* Small screens */
  @media (min-width: 768px) {
    & {
      width: 750px;
    }
  }

  /* Medium screens */
  @media (min-width: 992px) {
    & {
      width: 970px;
    }
  }

  @media (min-width: 1200px) {
    & {
      width: 1170px;
    }
  }
`;
