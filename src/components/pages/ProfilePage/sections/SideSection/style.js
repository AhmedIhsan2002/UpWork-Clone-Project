import styled from "styled-components";

export const StyledAsideProfile = styled.aside`
  width: 47%;
  border-right: 1px solid var(--gray-300-color);
  padding: 0 30px;

  p {
    color: var(--third-color);
    font-size: 16px;
  }

  span {
    color: var(--third-color);
    font-size: 14px;
  }

  .lang {
    padding: 5px 0;
  }

  .lang > strong {
    font-weight: 500;
  }

  .major {
    width: 20ch;
    overflow-wrap: break-word;
    font-size: 14px;
  }

  .major span {
    color: var(--gray-500-color);
  }
`;
