import { StyledAlignFlex } from "@/style/common";
import { styled } from "styled-components";

export const StyledInput = styled(StyledAlignFlex)`
  max-width: 100%;
  width: 100%;
  background-color: var(--white-color);
  border-radius: 8px;
  border: 2px solid var(--gray-300-color);
  padding: 0 10px;
  overflow: hidden;
  transition: all 0.3s;

  input,
  textarea {
    max-width: 100%;
    width: 100%;
    color: var(--dark-color);
    font-size: 15px;
    outline: none;
    padding: 10px 0;
    border: none;
  }

  &:focus-within,
  &:hover {
    border-color: var(--gray-100-color);
  }

  input {
    height: 35px;
  }

  textarea {
    height: 73px;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--gray-500-color);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    max-width: 100%;
    width: 22px;
  }

  .image__hidden,
  .left_image_hidden,
  .right_image_hidden {
    display: none;
  }

  input.remove__arrow::-webkit-outer-spin-button,
  input.remove__arrow::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input.remove__arrow[type="number"] {
    -moz-appearance: textfield;
  }
`;
