import styled from "styled-components";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const StyledDrawer = styled(SwipeableDrawer)`
  .css-1160xiw-MuiPaper-root-MuiDrawer-paper {
    background-color: var(--white-color);
    border-radius: 10px 0 0 10px;
    width: 75%;
    padding: 0 30px;
    overflow-y: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
  }
`;
