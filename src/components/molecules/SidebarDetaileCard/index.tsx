import { StyledAlignFlex, StyledFlexCenter } from "@/style/common";
import EditIcon from "@mui/icons-material/Edit";
import BoltIcon from "@mui/icons-material/Bolt";
import { StyledSidebarDetaile } from "./style.js";

type SidebarProps = {
  text: string;
  detaile: string;
  available?: boolean;
};

const SidebarDetaileCard = ({
  text,
  detaile,
  available = false,
}: SidebarProps) => {
  return (
    <StyledSidebarDetaile>
      <StyledAlignFlex gap="10px">
        <p>{text}</p>
        <StyledFlexCenter as="button">
          <EditIcon fontSize="small" />
        </StyledFlexCenter>
      </StyledAlignFlex>
      {available ? (
        <StyledAlignFlex gap="3px">
          <StyledAlignFlex gap="4px" className="available">
            <BoltIcon sx={{ color: "gray", fontSize: "18px" }} />
            <p>Currently Ready</p>
          </StyledAlignFlex>
          <span>off</span>
        </StyledAlignFlex>
      ) : (
        <span>{detaile}</span>
      )}
    </StyledSidebarDetaile>
  );
};

export default SidebarDetaileCard;
