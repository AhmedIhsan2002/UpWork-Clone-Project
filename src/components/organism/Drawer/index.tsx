import * as React from "react";
import Button from "@mui/material/Button";
import JobDetailsSection from "../JobDetailsSection";
import { StyledDrawer } from "./style.js";
import BasicTabs from "@/components/molecules/Tabs";
import { StyledJobsList } from "@/components/pages/jobs/style";

type Anchor = "right";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      <StyledJobsList>
        <h3>Recommended Jobs</h3>
        <BasicTabs
          showSearchControl={false}
          onClick={toggleDrawer("right", true)}
        />
      </StyledJobsList>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <StyledDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <JobDetailsSection
              onClick={toggleDrawer(anchor, false)}
              showHeader={true}
            />
          </StyledDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
