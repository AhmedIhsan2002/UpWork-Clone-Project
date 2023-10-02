import styled from "@emotion/styled";
import Button from '@mui/material/Button';

export const StyledButtonSaveSearch = styled(Button)`
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  text-transform: capitalize;
  font-weight: 600;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: var(--secondary-color);
    box-shadow: none;
  }
`;
