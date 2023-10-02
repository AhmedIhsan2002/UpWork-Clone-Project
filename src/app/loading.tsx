"use client";
/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";

const StyledLoading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  img {
    max-width: 100%;
    width: 150px;
  }

  @media (max-width: 427px) {
    img {
      width: 80px;
    }
  }
`;

const loading = () => {
  return (
    <StyledLoading>
      <img src="/assets/upwork-logo.png" alt="upwork logo" />
    </StyledLoading>
  );
};

export default loading;
