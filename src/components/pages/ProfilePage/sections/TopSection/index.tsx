/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  StyledAlignFlex,
  StyledAlignFlexStart,
} from "@/style/common";
import BoltIcon from "@mui/icons-material/Bolt";
import EditIcon from "@mui/icons-material/Edit";
import ProfileActiveAvatar from "@/components/atoms/ProfileActiveAvatar";
import ToolButton from "@/components/atoms/ToolButton";
import { StyledTopSection } from "./style.js"

const TopSection = () => {
  return (
    <StyledTopSection padding="30px">
      <StyledAlignFlex gap="20px">
        <ProfileActiveAvatar />
        <article>
          <h1>Ahmed_Ihsan</h1>
          <div>
            <LocationOnIcon sx={{ color: "gray" }} fontSize="small" />
            <p>Gaza, Palestinian </p>
          </div>
          <StyledAlignFlex gap="3px">
            <StyledAlignFlex gap="4px" className="available">
              <BoltIcon sx={{ color: "gray",fontSize: "18px" }} />
              <p>Available now</p>
            </StyledAlignFlex>
            <span>off</span>
            <ToolButton>
              <EditIcon fontSize="small" />
            </ToolButton>
          </StyledAlignFlex>
        </article>
      </StyledAlignFlex>
      <StyledAlignFlexStart gap="15px" className="buttons">
        <Button>See Public View</Button>
        <Button>Profile Settings</Button>
      </StyledAlignFlexStart>
    </StyledTopSection>
  );
};

export default TopSection;
