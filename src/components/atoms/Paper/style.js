import { StyledBetweenAlignFlex } from "@/style/common";
import styled from "styled-components";

export const StyledPaper = styled(StyledBetweenAlignFlex)`
  background-color: #006400;
  border-radius: 10px;
  padding: 30px 50px;
  color: var(--white-color);
  
  h1 {
    font-size: 25px;
  }

  p {
    font-size: 14px;
    margin: 10px 0 20px;
    max-width: 550px;
    line-height: 18px;
  }

  a {
    color: var(--primary-color);
    font-size: 15px;
    background-color: var(--white-color);
    border-radius: 50px;
    border: 2px solid var(--primary-color);
    padding: 5px 15px;
  }

  a:hover {
    background-color: var(--secondary-color);
  }
`;
