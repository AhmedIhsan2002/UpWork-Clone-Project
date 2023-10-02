/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import LinearProgressWithLabel from "@/components/atoms/Progress";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";
import SidebarDetaileCard from "@/components/molecules/SidebarDetaileCard";
import { StyledSidebarConnects } from "./style.js"
import { PATHS } from "@/constants/path";
import useAuth from "@/hook/useAuth";

const SidebarConnects = () => {
  const { user } = useAuth();

  return (
    <StyledSidebarConnects>
      <section className="title">
        <Link href={PATHS.PROFILE}>
          <img src="/assets/AHMED.jpeg" alt="account-image" />
        </Link>
        <Link href={PATHS.PROFILE}>Ahmed Qannan</Link>
        {/* <Link href={PATHS.PROFILE}>{user?.name}</Link> */}
        <p>Back-End Developer <span>Laravel</span></p>
      </section>
      <section className="completeness">
        <section className="prores">
          <h4>Profile Completeness:</h4>
          <LinearProgressWithLabel />
        </section>
        <section className="content">
          <p>Ways to make a strong impression on clients immediately</p>
          <section className="box">
            <p>Incorporate your previous projects to showcase your expertise</p>
            <Link href="#">Add work</Link>
            <IconButton sx={{ color: "white",backgroundColor: "green" }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </section>
        </section>
      </section>
      <section className="connects">
        <Link href="#">88 Available Connects</Link>
      </section>
      <section className="available_section">
        <SidebarDetaileCard
          text="Status Indicator"
          detaile=""
          available
        />
        <SidebarDetaileCard
          text="Hours per week"
          detaile="More than 20 hrs/week"
        />
        <SidebarDetaileCard
          text="Public Profile Status"
          detaile="Public"
        />
        <SidebarDetaileCard
          text="Job Preference"
          detaile="Open to contract-to-hire roles"
        />
      </section>
      <section className="category">
        <SidebarDetaileCard text="My Categories" detaile="" />
        <div>
          <Link href={PATHS.SEARCH}>Web Development</Link>
          <Link href={PATHS.SEARCH}>Database&Administrator</Link>
        </div>
      </section>
    </StyledSidebarConnects>
  )
}

export default SidebarConnects