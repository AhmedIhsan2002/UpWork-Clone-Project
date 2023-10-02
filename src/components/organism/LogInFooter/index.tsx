"use client";
import Link from "next/link";
import { StyledLoginFooter } from "./style.js";

const LogInFooter = () => {
  return (
    <StyledLoginFooter>
      <footer>
        <p>
          2023 Upwork®
          <Link href="#">Privacy Policy</Link>
        </p>
      </footer>
    </StyledLoginFooter>
  );
};

export default LogInFooter;
