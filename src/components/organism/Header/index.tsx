"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { StyledHeader } from "./style.js";
import Link from "next/link.js";
import CustomizedInputBase from "@/components/atoms/HeaderInput";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AccessibleBadges from "@/components/atoms/Badge";
import SendIcon from "@mui/icons-material/Send";
import { StyledAlignFlex, StyledBetweenAlignFlex } from "@/style/common";
import CustomizedMenus from "@/components/atoms/Menu";
import { HEADER_OPTIONS } from "@/mock/headerOptions";
import Logo from "@/components/atoms/Logo";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { useAuthContext } from "@/context/AuthContext";
import useAuth from "@/hook/useAuth";

const Header = () => {
  const [showMene, setShowMenu] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const { user } = useAuth();
  // const { logout } = useAuthContext();

  // const handleLogout = () => {
  //   logout();
  // };

  const toggleButton = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setChecked((prevState) => (prevState === false ? true : false));
    e.stopPropagation();
  };

  const handleShowMenu = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShowMenu((prevState) => (prevState === false ? true : false));
    e.stopPropagation();
  };

  return (
    <StyledHeader>
      <StyledAlignFlex gap="15px">
        <Logo />
        <CustomizedMenus
          defaultValue="Find Work"
          options={HEADER_OPTIONS.findWork}
        />
        <CustomizedMenus
          defaultValue="My Jobs"
          options={HEADER_OPTIONS.myJobs}
        />
        <CustomizedMenus
          defaultValue="Overview"
          options={HEADER_OPTIONS.overview}
        />
        <Link href="#">Messages</Link>
      </StyledAlignFlex>
      <StyledAlignFlex gap="15px">
        <CustomizedInputBase />
        <Link href="#">
          <QuestionMarkIcon />
        </Link>
        <Link href="#">
          <SendIcon />
        </Link>
        <Link href="#">
          <AccessibleBadges />
        </Link>
        <div className="menu-avatar" onClick={handleShowMenu}>
          {showMene && (
            <div className="Menu">
              <div className="info">
                <img src="/assets/AHMED.jpeg" alt="account-image" />
                {/* <h3>Waim Abd elhhadi</h3> */}
                <h3>{user?.name}</h3>
                <span>Freelancer</span>
              </div>
              <div className="switch">
                <StyledBetweenAlignFlex>
                  <Button
                    onClick={toggleButton}
                    className={checked ? "checked" : ""}
                  >
                    Online
                  </Button>
                  <Button
                    onClick={toggleButton}
                    className={checked ? "" : "checked"}
                  >
                    Invisible
                  </Button>
                </StyledBetweenAlignFlex>
              </div>
              <div className="tools">
                <StyledAlignFlex gap="15px">
                  <SettingsIcon
                    sx={{ color: "var(--dark-color)", fontSize: 24 }}
                  />
                  <p>Settings</p>
                </StyledAlignFlex>
                <StyledAlignFlex gap="15px">
                  <LogoutIcon
                    sx={{ color: "var(--dark-color)", fontSize: 24 }}
                  />
                  {/* <p onClick={handleLogout}>Log out</p> */}
                  <p>Log out</p>
                </StyledAlignFlex>
              </div>
            </div>
          )}
        </div>
      </StyledAlignFlex>
    </StyledHeader>
  );
};

export default Header;
