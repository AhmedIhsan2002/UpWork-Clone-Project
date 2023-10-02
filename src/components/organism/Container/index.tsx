"use client";
import { StyledContainer } from "./style.js";

const Container = ({children,}: {children: React.ReactNode}) => {
  return (
    <StyledContainer className={`main__container`}>{children}</StyledContainer>
  );
};

export default Container;
