import styled from "styled-components";

export const StyledSavePopupContent = styled.div`
  .MuiButtonBase-root {
    width: 100%;
    margin: 15px 0;
    border-radius: 50px;
    color: var(--white-color);
    background-color: var(--primary-color);
    text-transform: none;
    font-size: 16px;
  }

  .MuiButtonBase-root:hover {
    background-color: var(--green-color);
  }

  .MuiButtonBase-root:disabled {
    color: #d1cfcf;
    cursor: not-allowed;
    pointer-events: auto;
  }

  p {
    color: var(--gray-color);
    font-size: 14px;
    line-height: 1.4;
  }
`;
