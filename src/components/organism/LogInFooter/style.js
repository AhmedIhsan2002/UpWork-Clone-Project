import styled from "styled-components";

export const StyledLoginFooter = styled.section`
  margin: 0 0 20px;
  padding: 0 30px;

  footer {
    background-color: var(--third-color);
    border-radius: 10px;
    padding: 50px 40px;
    width: 100%;
  }
  p, a {
    color: var(--white-color);
    font-size: 11px;
    text-align: center;
  }

  a:hover {
    text-decoration: underline !important;
  }
`;