import styled from "styled-components";
import { StyledSection } from "@/style/common";

export const StyledJobDetailsParent = styled.div`
  overflow-y: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;

  &::-webkit-scrollbar {
    width: 0px;
  }

  .drawer_header {
    margin: 10px 0 30px;
  }

  .drawer_header button:hover {
    background: transparent;
  }

  .drawer_header h4 {
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  .drawer_header h4:hover p {
    text-decoration: underline;
  }

  .drawer_header a:hover {
    color: var(--green-color);
  }
`;

export const StyledJobDetailsSection = styled(StyledSection)`
  display: flex;
  margin-bottom: 20px;
`;
