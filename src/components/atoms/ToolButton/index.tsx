import { ReactNode } from "react";
import { StyledToolButton } from "./style.js";
type ToolButtonProps = {
  children: ReactNode;
}

const ToolButton = ({ children }: ToolButtonProps) => {
  return (
    <StyledToolButton as="button">
    { children }
  </StyledToolButton>
  )
}

export default ToolButton