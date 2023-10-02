import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { StyledSidebarLink } from "./style.js";
import { StyledBetweenAlignFlex } from "@/style/common";
import styled from "styled-components";
import Link from "next/link";
import { StyledSidebarLink } from './style.js';

type SidebarLinkProps = {
  linkName: string;
  path: string;
};

const SidebarLink = ({ linkName, path }: SidebarLinkProps) => {
  return (
    <StyledSidebarLink>
      <Link href={path} target="_black">
        <StyledBetweenAlignFlex gap="5px">
          <h4>{linkName}</h4>
          <KeyboardArrowRightIcon />
        </StyledBetweenAlignFlex>
      </Link>
    </StyledSidebarLink>
  );
};

export default SidebarLink;
