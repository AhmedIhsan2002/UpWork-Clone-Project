import styled from "@emotion/styled";

export const StyledChipSet = styled.div`
  .chip-input,
  .chip-container {
    flex-wrap: wrap;
  }

  .chip-input {
    padding: 15px 10px;
    border-radius: 8px;
    border: 2px solid var(--gray-300-color);
    background-color: var(--white-color);
  }

  .chip-input:hover {
    border-color: var(--gray-100-color);
  }

  input {
    color: var(--dark-color);
    background: transparent;
    border: none;
    outline: none;
    font-size: 15px;
  }

  input::placeholder {
    color: var(--gray-color);
    font-size: 15px;
    font-weight: 400;
  }

  .chip {
    color: var(--white-color);
    background-color: var(--primary-color);
    border-radius: 50px;
    padding: 5px 8px;
    font-size: 13px;
  }

  .chip:hover {
    background-color: var(--green-color);
  }
`;
