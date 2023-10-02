import { styled } from "styled-components";
import Paper from "@mui/material/Paper";

export const StyledInput = styled(Paper)`
  border-radius: 50px;
  box-shadow: none;
  border: 2px solid var(--gray-300-color);

  &:hover {
    background-color: var(--gray-300-color);
  }

  input {
    border-radius: 50px;
    padding: 0 10px;
  }

  input:focus {
    border: 2px solid var(--gray-500-color);
  }

  .css-78trlr-MuiButtonBase-root-MuiIconButton-root:hover {
    background: transparent;
    color: var(--dark-color);
    padding: 0;
  }
  select {
    font-size: 16px;
    padding: 0 15px;
    height: 28px;
  }

  select,
  input {
    border-radius: 50px;
    height: 35px;
  }

  select:hover,
  input:hover {
    background-color: var(--secondary-color);
  }
`;
