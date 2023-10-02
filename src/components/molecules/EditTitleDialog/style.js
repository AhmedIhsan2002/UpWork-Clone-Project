import styled from "styled-components";

export const StyledEditTitleDialog = styled.div`
  overflow-y: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  
  h4, .text p {
    color: var(--gray-color);
  }

  h4 {
    font-size: 15px;
    font-weight: 500;
  }

  .text p {
    font-size: 14px;
    font-weight: normal;
    margin: 10px 0 20px;
    line-height: 1.4;
  }

  .error {
    color: var(--danger-color);
    font-size: 14px;
  }
`;