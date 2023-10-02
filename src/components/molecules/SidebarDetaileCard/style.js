import styled from "styled-components";

export const StyledSidebarDetaile = styled.section`
  padding: 15px 30px;

  p:not(.available p) {
    color: var(--dark-color);
    font-size: 14px;
    font-weight: 500;
  }

  span:not(.available + span) {
    font-size: 14px;
  }

  .available {
    color: var(--gray-500-color);
    border: 1px solid var(--gray-500-color);
    padding: 1px 6px;
    border-radius: 50px;
    font-size: 13px;
  }

  .available + span {
    color: var(--dark-color);
    font-size: 13px;
  }

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid var(--gray-200-color);
    cursor: pointer;
    color: var(--primary-color);
    background-color: var(--white-color);
  }

  button:hover {
    background-color: var(--secondary-color);
  }
`;
