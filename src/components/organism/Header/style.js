import styled from "styled-components";
import { StyledBetweenAlignFlex } from "@/style/common";

export const StyledHeader = styled(StyledBetweenAlignFlex)`
  width: 100%;
  height: 60px;
  padding: 10px 30px;

  .logo:first-of-type {
    max-width: 100%;
    width: 80px;
    margin-right: 10px;
  }

  select {
    font-size: 16px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  a {
    color: var(--dark-color);
  }

  select + a:hover {
    color: var(--primary-color);
  }

  img:last-of-type {
    max-width: 100%;
    width: 33px;
    border-radius: 50%;
  }

  @media (max-width: 992px) {
    select, a {
      display: none;
    }
  }

  .menu-avatar {
    position: relative;
    background-image: url("assets/account-image.jpg");
    background-size: cover;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
  }

  .Menu {
    position: absolute;
    right: 0;
    top: 47px;
    border-radius: 5px;
    width: 250px;
    padding: 15px 0 8px;
    background-color: var(--white-color);
    box-shadow: 0 0 10px #ddd;
    z-Index: 1000;
  }

  .Menu::before {
    content: "";
    position: absolute;
    right: 7px;
    top: -20px;
    border-color: transparent transparent var(--white-color) transparent;
    border-style: solid;
    border-width: 10px;
  }

  .info {
    text-align: center;
  }

  .info img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-bottom: 5px;
  }

  .info h3 {
    color: var(--dark-color);
    font-size: 17px;
    font-weight: 500;
    margin: 0;
  }

  .info span {
    color: var(--gray-color);
    font-size: 12px;
  }

  .tools {
    margin-top: 15px;
  }

  .tools > div {
    padding: 10px 15px;
    background-color: var(--white-color);
    cursor: pointer;
  }

  .tools > div:hover {
    background-color: var(--secondary-color);
  }

  .tools > div p {
    color: var(--dark-color);
    font-size: 15px;
    font-weight: 500;
  }

  .switch {
    padding: 0 15px;
    margin-top: 10px;
  }

  .switch div {
    width: 100%;
    border: 2px solid var(--gray-300-color);
    border-radius: 50px;
  }

  .switch button {
    width: 100%;
    padding: 5px;
    color: var(--primary-color);
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 500;
    border-radius: 50px;
  }

  .checked {
    color: var(--white-color) !important;
    background-color: var(--primary-color);
  }

  .checked:hover {
    background-color: var(--green-color);
  }
`;
