import JobDetailsSidebar from "@/components/molecules/JobDetailsSidebar";
import JobDetailsContentSection from "@/components/pages/JobDetails/sections/JobDeatilsContentSection";
import { StyledBetweenAlignFlex, StyledFlex } from "@/style/common";
import { StyledJobDetailsParent, StyledJobDetailsSection } from "./style.js";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link.js";
import React, { MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { JOBS_DETAILS } from "@/mock/jobs";

type JobDetailsSectionProps = {
  showHeader?: boolean;
  onClick?: () => void;
}

const JobDetailsSection = ({ onClick, showHeader = false }: JobDetailsSectionProps) => {
  const [showHeaderDrawer, setShowHeaderDrawer] = useState<boolean>(showHeader);

  const router = useRouter();

  return (
    <StyledJobDetailsParent>
      {showHeaderDrawer && (
        <StyledBetweenAlignFlex gap="15px" className="drawer_header">
          <IconButton onClick={onClick}>
            <ChevronLeftIcon
              sx={{ color: "var(--dark-color)", fontSize: 40 }}
            />
          </IconButton>
          <h4 onClick={() => router.push(`/jobs/${JOBS_DETAILS.id}`)}>
            <OpenInNewIcon
              sx={{ color: "var(--primary-color)", fontSize: 20 }}
            />{" "}
            <p>Launch job in a new tab</p>
          </h4>
        </StyledBetweenAlignFlex>
      )}
      <StyledJobDetailsSection>
        <JobDetailsContentSection />
        <JobDetailsSidebar />
      </StyledJobDetailsSection>
    </StyledJobDetailsParent>
  );
};

export default JobDetailsSection;
