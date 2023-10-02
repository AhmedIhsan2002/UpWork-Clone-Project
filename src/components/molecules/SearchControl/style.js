import styled from "styled-components";

export const StyledSearchControl = styled.div`
    padding: 0 30px;

  .search {
    flex: 1;
    margin: 10px 0 15px;
  }

  a {
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline !important;
  }

  span {
    color: var(--dark-color);
    font-weight: 600;
    font-size: 15px;
  }

  button.menu {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid var(--gray-200-color);
    cursor: pointer;
    color: var(--green-color);
    background-color: var(--white-color);
  }

  button.menu:hover {
    background-color: var(--secondary-color);
  }
  
  .css-ay017x-MuiFormControl-root {
    width: 140px;
    min-width: 0;
  }

  .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root {
    font-size: 14px;
  }

  .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 5px 14px;
  }
`;
