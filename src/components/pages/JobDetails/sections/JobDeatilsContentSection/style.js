import styled from "styled-components";

export const StyledJobDetailsContent = styled.div`
  width: 100%;
  border-right: 1px solid var(--gray-300-color);

  article {
    padding: 20px 30px;
  }

  article:not(:first-child) {
    border-top: 1px solid var(--gray-300-color);
  }

  span {
    display: block;
  }

  p {
    color: var(--dark-color);
    font-size: 15px;
    line-height: 1.4;
  }

  a {
    color: var(--primary-color);
    text-decoration: underline;
  }

  a:hover,
  .skills a:hover {
    color: var(--green-color);
  }

  h2 {
    font-size: 20px;
    margin-bottom: 40px;
  }

  .link {
    font-size: 15px;
    margin-bottom: 20px;
  }

  .link a {
    font-weight: 600;
  }

  .link span {
    color: var(--gray-color);
    margin-top: 5px;
  }

  .project_type p {
    font-weight: 500;
  }

  .project_type span {
    display: inline-block;
    font-weight: normal;
  }
`;
