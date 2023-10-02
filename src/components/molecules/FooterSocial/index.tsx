"use client";
import { StyledAlignFlex } from "@/style/common";
import { StyledFooterSocial } from "./style.js";
import Link from "next/link.js";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const FooterSocial = () => {
  return (
    <StyledFooterSocial>
      <StyledAlignFlex gap="15px">
        <span>Follow Us</span>
        <StyledAlignFlex gap="8px">
          <Link href="#">
            <FacebookIcon />
          </Link>
          <Link href="#">
            <LinkedInIcon />
          </Link>
          <Link href="#">
            <TwitterIcon />
          </Link>
          <Link href="#">
            <YouTubeIcon />
          </Link>
          <Link href="#">
            <InstagramIcon />
          </Link>
        </StyledAlignFlex>
      </StyledAlignFlex>
      <StyledAlignFlex gap="7px">
        <span>Mobile app</span>
        <StyledAlignFlex gap="15px">
          <Link href="#">
            <AppleIcon />
          </Link>
          <Link href="#">
            <AndroidIcon />
          </Link>
        </StyledAlignFlex>
      </StyledAlignFlex>
    </StyledFooterSocial>
  );
};

export default FooterSocial;
