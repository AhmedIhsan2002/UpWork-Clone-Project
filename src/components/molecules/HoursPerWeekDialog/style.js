import styled from "styled-components";

export const StyledHoursPerWeekDialog = styled.div`
  .rate {
    padding: 15px 0;
  }

  .rate:not(:nth-last-of-type(2)) {
    border-bottom: 1px solid var(--gray-300-color);
  }

  h3, .rate span {
    font-size: 15px;
  }

  .rate span {
    color: var(--gray-color);
  }

  h3 {
    font-weight: 500;
  }

  p, span {
    color: var(--gray-color);
    font-size: 13px;
  }

  article {
    p {
      font-size: 14px;
      padding: 8px 0;
    }
    p:last-of-type {
      color: var(--gray-color);
    }
  }

  .rate__input {
    height: 35px;
    width: 10rem;
    text-align: right;
  }

  .rate__input::placeholder {
    text-align: right;
  }

  .fee__input {
    background-color: var(--gray-300-color);
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }

`;