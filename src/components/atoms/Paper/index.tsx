/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { StyledPaper } from "./style.js";

const Paper = () => {
  return (
    <StyledPaper className="paper">
      <div className="text">
        <h1>Access 80 Connects every month.</h1>
        <p>
        "Enroll in Freelancer Plus and kick off each month with a fresh batch of 80 Connects. Plus, enjoy a host of additional benefits! Sign up today to unlock new features that will empower you to expand your network and promote your skills."
        </p>
        <Link href="#">Learn more</Link>
      </div>
      <img
        src="/assets/UPWORK.gif"
        alt="image"
        width={200} height={200} 
      />
    </StyledPaper>
  );
};

export default Paper;
