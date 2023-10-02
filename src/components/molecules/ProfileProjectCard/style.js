import styled from "styled-components";

export const StyledProfileProjectCard = styled.div`
  cursor: pointer;

  &:hover .tool_edit {
    opacity: 1;
  }

  .image {
    position: relative;
  }

  img {
    max-width: 100%;
  }

  .tool_edit {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.1);
    opacity: 0;
  }

  h3 {
    color: var(--primary-color);
    font-size: 15px;
    margin-top: 8px;
  }

  h3:hover {
    text-decoration: underline;
  }

`;