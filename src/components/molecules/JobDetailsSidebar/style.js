import styled from "styled-components";

export const StyledJobDetailsSidabar = styled.div`
  width: 43%;

  h3 {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 500;

  }

  article {
    padding: 20px 25px;
  }

  article:not(:first-child) {
    border-top: 1px solid var(--gray-300-color);
  }

  p {
    color: var(--dark-color);
    font-size: 14px;
  }

  button {
    padding: 5px 10px;
    width: 90%;
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 600;
    border-radius: 50px;
    margin-bottom: 20px;
    border: 2px solid var(--primary-color);
  }

  button:first-of-type {
    color: var(--white-color);
    background-color: var(--primary-color);
  }

  button:first-of-type:hover {
    background-color: var(--green-color);
    border-color: var(--green-color);
  }

  button:last-of-type {
    color: var(--primary-color);
    background-color: var(--white-color);
  }

  button:last-of-type:hover {
    background-color: var(--gray2-200-color);
  }

  a {
    color: var(--primary-color);
  }

  a:hover {
    text-decoration: underline;
  }

  article:first-child p,
  .rate {
    margin-top: 10px;
  }

  .rate {
    flex-wrap: wrap;
  }

  .rating {
    margin-bottom: 20px;
  }

  .about p {
    font-size: 15px;
    font-weight: 500;
  }

  .about .span {
    color: var(--gray-color);
    font-size: 14px;
  }

  .location {
    margin-bottom: 10px;
  }

  .location:last-of-type + span {
    font-size: 13px;
  }

  .job_link button {
    color: #9aaa97;
    border-radius: 10px;
    background-color: #e4ebe4;
    font-size: 15px;
    font-weight: normal;
    padding: 5px;
    cursor: not-allowed;
    pointer-events: auto;
    border: none;
    text-transform: none;
    margin-bottom: 5px;
  }

  .job_link button:hover {
    background-color: #e4ebe4;
  }

  .job_link a {
    font-size: 16px;
    font-weight: 500;
  }
`;
