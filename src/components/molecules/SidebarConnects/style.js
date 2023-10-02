import { StyledSection } from "@/style/common";
import styled from "styled-components";

export const StyledSidebarConnects = styled(StyledSection)`
  .title {
    padding: 10px 10px 15px;
    text-align: center;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    
  }

  .title a {
    display: block;
    width: fit-content;
    color: var(--dark-color);
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline !important;
    margin: 10px auto 8px;
  }

  .title:hover a {
    color: var(--primary-color);
  }

  .title p {
    color: var(--dark-color);
    font-size: 15px;
  }
  .title p span{
   color:red;
  }

  .completeness {
    background-color: var(--gray2-200-color);
  }

  h4 {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 5px;
  }

  h4:hover {
    color: var(--primary-color);
    text-decoration: underline !important;
    cursor: pointer;
  }

  .prores,
  .content,
  .connects {
    padding: 20px 30px;
  }

  .prores {
    border-bottom: 1px solid var(--gray-200-color);
  }

  .content > p {
    font-size: 12px;
  }

  .box {
    background-color: var(--white-color);
    border: 1px solid var(--gray-200-color);
    padding: 10px;
    margin-top: 12px;
    position: relative;
  }

  .box p {
    color: var(--gray-500-color);
    font-size: 12px;
    line-height: 1.5;
  }

  .box a,
  .connects a,
  .category a {
    color: var(--primary-color);
  }

  .box a {
    font-size: 13px;
    font-weight: 500;
  }

  .box a:hover,
  .connects a:hover,
  .category a:hover {
    text-decoration: underline !important;
  }

  .box button {
    position: absolute;
    width: 24px;
    height: 24px;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .box button:hover {
    background-color: var(--green-color);
  }

  .available_section {
    padding: 15px 0;
    border-top: 1px solid var(--gray-200-color);
    border-bottom: 1px solid var(--gray-200-color);
  }

  .category {
    padding-bottom: 20px;
  }

  .category a {
    display: block;
    padding: 0 30px;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;
