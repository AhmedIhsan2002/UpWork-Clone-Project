import { StyledLink } from "./style.js";

type linkProps = {
  text: string;
  path: string;
}

const Link = ({ text, path }: linkProps) => {
  return <StyledLink href={path}>{text}</StyledLink>;
};

export default Link;
