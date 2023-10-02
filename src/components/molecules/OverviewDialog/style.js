import styled from "styled-components";

export const StyledOverviewDialog = styled.div`
  overflow-y: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;

  p, li, a {
    font-size: 14px;
  }

  p, li {
    color: var(--dark-color);
  }

  p { 
    margin-bottom: 15px;
  }

  ul {
    margin-left: 1.3rem;
  }

  li {
    margin-bottom: 12px;
  }

  a {
    display: block;
    color: var(--primary-color);
    margin-bottom: 5px;
    width: fit-content;
  }
  a:hover {
    text-decoration: underline;
  }

  span {
    display: block;
    color: var(--gray-color);
    text-align: right;
    font-size: 13px;
    margin-top: 5px;
  }

  textarea {
    height: 150px !important;
  }

  textarea::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--gray-color);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
  }
`;