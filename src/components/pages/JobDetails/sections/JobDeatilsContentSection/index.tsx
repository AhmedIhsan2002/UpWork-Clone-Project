import Link from "next/link.js";
import { StyledJobDetailsContent } from "./style.js";
import { StyledAlignFlex } from "@/style/common";
import PinDropIcon from "@mui/icons-material/PinDrop";
import JobSkillsAndExpertise from "@/components/molecules/JobSkillsAndExpertise";
import JobActivity from "@/components/molecules/JobActivity";
import JobPrice from "@/components/molecules/JopPrice";
import JopParagraph from "@/components/molecules/JopParagraph";
import { PATHS } from "@/constants/path";

const JobDetailsContentSection = () => {
  return (
    <StyledJobDetailsContent>
      <article className="title">
        <h2>Wix Sales Expert</h2>
        <div className="link">
          <Link href={PATHS.SEARCH}>Web Development</Link>
          <span>Refreshed 66 minutes back</span>
        </div>
        <StyledAlignFlex gap="4px">
          <PinDropIcon color="primary" fontSize="small" />
          <p>Worldwide</p>
        </StyledAlignFlex>
      </article>
      <JopParagraph />
      <JobPrice />
      <article className="project_type">
        <p>
          Project Type: <span>Ongoing project</span>
        </p>
      </article>
      <JobSkillsAndExpertise />
      <JobActivity />
    </StyledJobDetailsContent>
  );
};

export default JobDetailsContentSection;
