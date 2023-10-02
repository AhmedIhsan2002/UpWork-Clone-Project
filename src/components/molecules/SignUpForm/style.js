import styled from "styled-components";
import { StyledSection } from "@/style/common";

export const StyledSignUp = styled(StyledSection)`
  width: 680px;
  margin: 100px 0 60px 0;
  border-radius: 20px;
  box-shadow: none;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  h1 {
    color: var(--dark-color);
    font-size: 38px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 500;
    margin-bottom: 18px;
    text-align: center;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 34px !important;
    }
  }

  a div {
    width: 100%;
    font-size: 14px;
    border-radius: 50px;
    transition: all 0.3s;
    margin-top: 10px;
  }

  a:first-of-type div {
    padding: 10px;
    border: 1px solid var(--dark-color);
    background-color: var(--white-color);
    color: var(--dark-color);
  }

  a:first-of-type img {
    max-width: 100%;
    width: 16px;
  }

  a:first-of-type div:hover {
    background-color: var(--secondary-color);
  }

  a:last-of-type > div {
    border: 1px solid var(--light-blue);
    background-color: var(--light-blue);
    color: var(--white-color);
  }

  a:last-of-type span {
    margin: auto;
  }

  a:last-of-type img {
    max-width: 100%;
    width: 35px;
  }

  a:last-of-type > div:hover {
    background-color: var(--bold-blue);
  }

  .or {
    background-color: var(--gray-300-color);
    width: 100%;
    height: 1px;
    margin: 30px 0;
    position: relative;
  }

  .or::after {
    content: "or";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--gray-color);
    background-color: var(--white-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.2px;
    padding: 10px;
  }

  .box {
    color: var(--danger-color);
    margin: 15px 0 15px;
  }

  @media (max-width: 426px) {
    .box {
      flex-wrap: wrap;
      gap: 15px;
    }
  }

  .box:first-of-type div {
    width: 100%;
  }

  .error {
    color: var(--danger-color);
  }

  button {
    width: 100%;
    margin-top: 25px;
    border-radius: 50px;
    color: var(--white-color);
    background-color: var(--primary-color);
    text-transform: none;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 12px;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background-color: var(--green-color);
  }
`;
