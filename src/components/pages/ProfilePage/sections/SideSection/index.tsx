/* eslint-disable react/no-children-prop */
import SidebarControlProfile from "@/components/atoms/SidebarControlProfile";
import { StyledFlex } from "@/style/common";
import { StyledAsideProfile } from "./style.js";

const SideSection = () => {
  return (
    <StyledAsideProfile>
      <SidebarControlProfile text="Video introduction" addIcon />
      
      <SidebarControlProfile
        text="Weekly hours"
        editIcon
      >
        <p>Exceeding 30 hours per week</p>
        <span>Available for contract-to-hire</span>
      </SidebarControlProfile>

      <SidebarControlProfile text="Languages" editIcon addIcon>
        <StyledFlex className="lang">
          <p>English:&nbsp;</p>
          <span>Informal</span>
        </StyledFlex>
        <StyledFlex className="lang">
          <p>Arabic: &nbsp;</p>
          <span>Mother tongue or Fluent</span>
        </StyledFlex>
      </SidebarControlProfile>

      <p>Confirmations</p>
      <SidebarControlProfile text="Armed Forces Veteran" addIcon />

      <SidebarControlProfile text="Education" addIcon>
        <SidebarControlProfile
          text="University of Palestine - Al-Zahraa"
          editIcon
          deleteIcon
        >
          <p className="major">
          Bachelor of Computer Information Systems - College of IT
            <br />
            <span>2020-2024 (expected)</span>
          </p>
        </SidebarControlProfile>
      </SidebarControlProfile>
    </StyledAsideProfile>
  );
};

export default SideSection;
