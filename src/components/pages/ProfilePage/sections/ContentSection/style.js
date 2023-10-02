import styled from "styled-components";

export const StyledContentProfile = styled.div`
  width: 100%;

  article {
    padding: 30px;
  }

  article:not(:first-child) {
    border-top: 1px solid var(--gray-300-color);
  }

  p {
    font-size: 14px;
    overflow-wrap: break-word;
    margin-top: 15px;
    line-height: 1.4;
  }

  a {
    font-size: 14px;
    color: var(--primary-color);

    &:hover {
      text-decoration: underline;
    }
  }

  .skills {
    margin-top: 10px;
  }

  .skill-btn {
    height: 30px;
    border-radius: 35px;
    color: var(--black-color);
    background-color: var(--gray-300-color);
    margin: 0.2rem 0.15rem;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
      background-color: var(--gray-200-color);
    }
  }

  article:last-child button {
    color: var(--primary-color);
    padding: 0 15px;
    border: 2px solid var(--primary-color);
    border-radius: 35px;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: bold;
  }

  article:last-child p {
    max-width: 80%;
    width: 100%;
  }

  /* .css-1oj2twp-MuiPagination-root {
  } */

  button.MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-sizeMedium.MuiPaginationItem-text.MuiPaginationItem-circular.MuiPaginationItem-textPrimary.Mui-selected.MuiPaginationItem-page.css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root {
    background-color: green;
  }
`;