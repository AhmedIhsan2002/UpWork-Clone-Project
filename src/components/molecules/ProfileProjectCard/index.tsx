/* eslint-disable @next/next/no-img-element */
import { StyledFlexCenter } from "@/style/common";
import { StyledProfileProjectCard } from "./style.js";
import ToolButton from "@/components/atoms/ToolButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type ProfileProjectCardProps = {
  imageSrc: string;
  titleProject: string;
};

const ProfileProjectCard = ({
  imageSrc,
  titleProject,
}: ProfileProjectCardProps) => {
  return (
    <StyledProfileProjectCard>
      <div className="image">
        <img src={imageSrc} alt="project" />
        <StyledFlexCenter gap="15px" className="tool_edit">
          <ToolButton>
            <EditIcon fontSize="small" />
          </ToolButton>
          <ToolButton>
            <DeleteIcon fontSize="small" />
          </ToolButton>
        </StyledFlexCenter>
      </div>
      <h3>{titleProject}</h3>
    </StyledProfileProjectCard>
  );
};

export default ProfileProjectCard;
