import { styled } from "styled-components";

export const StyledSearchDropdown = styled.div`
  & > div:first-child {
    border-radius: 50px;
    width: 230px;
    margin: 15px auto;
    position: relative;
  }

  input {
    height: 28px;
  }

  input::placeholder {
    font-size: 13px;
  }

  .search_list {
    width: 100%;

    border-radius: 10px;
    box-shadow: 0 0 10px #ddd;
    background-color: var(--white-color);
    overflow-y: auto;
    height: 200px;

    p {
      color: var(--dark-color);
      font-size: 13px;
      padding: 10px 15px;
    }

    div {
      vertical-align: middle;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
    }

    div:hover {
      background-color: var(--secondary-color);
    }
  }
`;
