import { styled } from "styled-components";

export const StyledFilterSlider = styled.div`
  margin: 40px 0 10px;

  .css-187mznn-MuiSlider-root {
    width: 80%;
    margin: 0 auto;
    color: var(--green-color);
  }

  .css-nnid7-MuiSlider-valueLabel.MuiSlider-valueLabelOpen {
    background-color: var(--white-color);
    color: var(--dark-color);
    border: 1px solid var(--gray-300-color);
    border-radius: 5px;
    width: fit-content;
  }

  .css-eg0mwd-MuiSlider-thumb,
  .css-1gv0vcd-MuiSlider-track {
    background-color: var(--green-color) !important;
  }

  .css-14pt78w-MuiSlider-rail {
    background-color: var(--gray-300-color);
  }
  
  .css-nnid7-MuiSlider-valueLabel:before {
    border-bottom: 1px solid var(--gray-300-color);
    border-right: 1px solid var(--gray-300-color);
    border-radius: 3px;
  }
`;