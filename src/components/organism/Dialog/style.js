import styled from "styled-components";

export const dialogStyle = {
  minWidth: "55vw",
  padding: "1.5rem",
  borderRadius: "15px",
};

export const StyledDialog = styled.div`
  button {
    background-color: var(--green-color);
    text-transform: capitalize;
    font-weight: bold;
  }

  button:first-of-type {
    color: var(--green-color);
    box-shadow: none;
    background: none;
  }

  button:first-of-type:hover {
    color: var(--green-color);
    text-decoration: underline;
  }

  button:last-of-type {
    padding: 8px 30px;
    background-color: var(--primary-color);
    border-radius: 30px;
  }

  button:last-of-type:hover {
    background-color: var(--green-color);
  }
`;
