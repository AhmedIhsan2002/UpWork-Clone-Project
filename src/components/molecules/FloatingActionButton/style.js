import { styled } from "styled-components";

export const StyledFloading = styled.div`
  button {
    position: fixed;
    bottom: 20px;
    right: 40px;
    width: 58px;
    padding: 3px 0;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    color: var(--primary-color);
    font-size: 16px;
    background-color: var(--white-color);
    border: 2px solid var(--primary-color);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    button {
      bottom: 50px;
      right: 30px;
    }
  }
`;
