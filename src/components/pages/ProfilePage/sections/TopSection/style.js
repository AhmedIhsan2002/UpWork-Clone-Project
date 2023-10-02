import styled from "styled-components";
import { StyledBetweenFlex } from "@/style/common";

export const StyledTopSection = styled(StyledBetweenFlex)`
  article {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5px 0;
    }
    p {
      font-size: 14px;
    }
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
    margin-right: 5px;
  }

  .buttons button {
    padding: 5px 20px;
    border-radius: 35px;
    text-transform: capitalize;
    font-size: 14px;
    border: 2px solid var(--primary-color);
  }

  .buttons button:first-of-type {
    color: var(--primary-color);
  }

  .buttons button:last-of-type {
    background-color: var(--primary-color);
    color: var(--white-color);
    font-weight: 600;
    letter-spacing: 0.05rem;
  }
`;
