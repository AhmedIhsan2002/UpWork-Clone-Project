import Avatar from "@mui/material/Avatar";
import { StyledBadge } from "./style.js";
import ToolButton from "../ToolButton";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";

const StyledTool = styled.div`
  position: absolute;
  left: -4px;
  top: -4px;
  z-index: 100;
`;

const ProfileActiveAvatar = () => {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      <StyledTool>
        <ToolButton>
          <EditIcon fontSize="small" />
        </ToolButton>
      </StyledTool>
      <Avatar
        alt="Ahmed"
        src="/assets/AHMED.jpeg"
        sx={{ height: "80px", width: "80px" }}
      />
    </StyledBadge>
  );
};

export default ProfileActiveAvatar;
