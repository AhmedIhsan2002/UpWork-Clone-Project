"use client";
import Link from "next/link";
import { StyledHaveAccount } from "./style";

type HaveAccountProps = {
  question: string;
  path: string;
  linkText: string;
  showLink: boolean;
};

const HaveAccount = ({ question, path, linkText, showLink }: HaveAccountProps) => {
  return (
    <StyledHaveAccount gap="3px">
      <p>{question}</p>
      {showLink && (
        <Link href={path}>{linkText}</Link>
      )}
    </StyledHaveAccount>
  );
};

export default HaveAccount;
