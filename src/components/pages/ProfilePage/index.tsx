/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./style.js";
import { StyledProfilePage } from "./style.js";
import { StyledFlex, StyledSection } from "@/style/common";
import ProfilePaper from "@/components/molecules/ProfilePaper";
import TopSection from "./sections/TopSection";
import SideSection from "./sections/SideSection";
import ContentSection from "./sections/ContentSection";

const ProfilePage = () => {
  return (
    <StyledProfilePage width="75%">
        <ProfilePaper />
        <StyledSection>
          <TopSection />
          <StyledFlex className="content">
            <SideSection />
            <ContentSection />
          </StyledFlex>
        </StyledSection>
    </StyledProfilePage>
  );
};

export default ProfilePage;
