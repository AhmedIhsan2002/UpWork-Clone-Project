import { StyledFooterLinks } from "./style.js";
import {
  FOOTER_COLUMN1,
  FOOTER_COLUMN2,
  FOOTER_COLUMN3,
  FOOTER_COLUMN4,
} from "@/mock/footerData";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <StyledFooterLinks>
      <ul>
        {FOOTER_COLUMN1.map((link) => (
          <li key={link.id}>
            <Link href="">{link.pageLink}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {FOOTER_COLUMN2.map((link) => (
          <li key={link.id}>
            <Link href="">{link.pageLink}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {FOOTER_COLUMN3.map((link) => (
          <li key={link.id}>
            <Link href="">{link.pageLink}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {FOOTER_COLUMN4.map((link) => (
          <li key={link.id}>
            <Link href="">{link.pageLink}</Link>
          </li>
        ))}
      </ul>
    </StyledFooterLinks>
  );
};

export default FooterLinks;
