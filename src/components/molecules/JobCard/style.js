import styled from "styled-components";

export const StyledJobCard = styled.div`
  background-color: var(--white-color);
  border-bottom: 1px solid var(--gray-300-color);
  padding: 30px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: var(--gray-300-color);
  }

  &:first-of-type {
    margin-top: 20px;
  }

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--gray-200-color);
    cursor: pointer;
    color: var(--primary-color);
    background-color: var(--white-color);
  }

  button:hover {
    background-color: var(--secondary-color);
  }

  a, a + span, .skills span {
    color: var(--gray-color);
  } 

  a {
    font-size: 16px;
    transition: all 0.3s;
    margin-bottom: 10px;
  }
  a:hover {
    color: var(--primary-color);
    text-decoration: underline !important;
  }

  span.fixed,
  span.hourly {
    display: block;
    color: var(--gray-color);
    font-size: 13px;
    margin: 10px 0 5px;
  }

  p:first-of-type {
    color: var(--dark-color);
    font-size: 15px;
    margin-bottom: 15px;
  }

  .skills span {
    font-size: 14px;
    background-color: #d5d7d8;
    border-radius: 50px;
    padding: 2px 10px;
  }

  .skills span:hover {
    background-color: var(--gray-100-color);
  }

  .proposal, .evaluation p {
    color: var(--gray-color);
    font-size: 13px;
  }

  .proposal {
    margin: 15px 0 8px;
  }

  .proposal strong,
  .evaluation p strong {
    color: var(--dark-color);
  }

  .evaluation p {
    margin: 0;
  }
`;