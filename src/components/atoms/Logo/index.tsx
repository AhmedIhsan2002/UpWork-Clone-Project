/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { StyledLogo } from "./style.js"
import { PATHS } from "@/constants/path";

const Logo = () => {
  return (
    <StyledLogo>
      <Link href={PATHS.HOME}>
        <img src="/assets/UPWORK.gif" alt="upwork logo" className="logo" style={{
          marginTop:'12px'
        }} />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
