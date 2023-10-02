import Link from "next/link";
import { StyledSidebarProposalCard } from "./style.js"

type ProposalProps = {
  title: string;
  link1: string;
  link2: string;
  paragraph: string;
  linkShow: boolean;
};

const SidebarProposalCard = ({
  title,
  link1,
  link2,
  paragraph,
  linkShow,
}: ProposalProps) => {
  return (
    <StyledSidebarProposalCard margin='30px 0 0'>
      <div className="title">
        <h3>{title}</h3>
        <Link href="#">{link1}</Link>
      </div>
      {linkShow ? (
        <p className="para">{paragraph}</p>
      ) : (
        <div className="para">
          <Link href="#">{link2}</Link>
          <p>{paragraph}</p>
        </div>
      )}
    </StyledSidebarProposalCard>
  );
};

export default SidebarProposalCard;
