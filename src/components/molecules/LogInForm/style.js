import styled from "styled-components";
import { StyledSection } from "@/style/common";

export const StyledLogIn = styled(StyledSection)`
  width: 510px;
  margin: 100px 0 60px 0;
  border-radius: 20px;
  box-shadow: none;

  h1 {
    color: var(--dark-color);
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 35px;
    text-align: center;
  }

  .links a div {
    width: 100%;
    font-size: 14px;
    border-radius: 50px;
    transition: all 0.3s;
    margin-top: 20px;
  }

  .links a:first-of-type > div {
    border: 1px solid var(--light-blue);
    background-color: var(--light-blue);
    color: var(--white-color);
  }

  .links a:first-of-type span {
    margin: auto;
  }

  .links a:first-of-type img {
    max-width: 100%;
    width: 35px;
  }

  .links a:first-of-type > div:hover {
    background-color: var(--bold-blue);
  }

  .links a:last-of-type div {
    padding: 10px;
    border: 1px solid var(--dark-color);
    background-color: var(--white-color);
    color: var(--dark-color);
  }

  .links a:last-of-type img {
    max-width: 100%;
    width: 16px;
  }

  .links a:last-of-type div:hover,
  a.signup:hover {
    background-color: var(--secondary-color);
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

  .box:first-of-type div {
    width: 100%;
  }

  .error {
    color: var(--danger-color);
  }

  button {
    width: 100%;
    margin-top: 10px;
    border-radius: 50px;
    color: var(--white-color);
    background-color: var(--primary-color);
    text-transform: none;
    font-size: 16px;
    font-weight: 500;
    border: none;
    outline: none;
    padding: 12px;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background-color: var(--green-color);
  }

  a.signup {
    display: block;
    color: var(--primary-color);
    width: 220px;
    padding: 8px;
    text-align: center;
    border: 2px solid var(--primary-color);
    border-radius: 50px;
    margin: 20px auto 10px;
    font-weight: 600;
    transition: all 0.3s;
  }

  .have-account {
    margin-top: 70px;
    position: relative;
  }

  .have-account div {
    padding: 0 15px;
    background-color: var(--white-color);
    width: fit-content;
    margin: auto;
    position: relative;
  }

  .have-account::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 0.5px;
    background-color: var(--gray-800-color);
  }
`;
