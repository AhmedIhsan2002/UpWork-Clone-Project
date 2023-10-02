"use client";
import FooterLinks from "@/components/molecules/FooterLinks";
import FooterSocial from "@/components/molecules/FooterSocial";
import { Container } from "@mui/material";
import { StyledMainFooter } from "./style.js"
import CopyRight from "@/components/molecules/CopyRight";

const Footer = () => {
  return (
    <StyledMainFooter>
      <Container>
        <FooterLinks />
        <FooterSocial />
        <CopyRight />
      </Container>
    </StyledMainFooter>
  );
};

export default Footer;
