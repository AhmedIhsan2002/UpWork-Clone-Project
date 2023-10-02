/* eslint-disable @next/next/no-img-element */
"use client";
import { StyledFlexCenter } from "@/style/common";
import { styled } from "styled-components";

const StyledNotFound = styled(StyledFlexCenter)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 50px;

  @media (max-width: 426px) {
    flex-direction: column;
    gap: 20px;
  }
  
  img {
    max-width: 100%;
    width: 100px;
  }

  @media (max-width: 426px) {
    img {
      width: 80px;
    }
  }

  .error__text {
    color: var(--primary-color);
    text-align: center;
    padding-left: 30px;
    border-left: 1px solid var(--primary-color);
  }

  h1 {
    font-size: 100px;
    animation: up-down 3s linear infinite alternate;
  }

  @keyframes up-down {
    0%,
    100% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
  }

  p {
    line-height: 1.4;
    text-transform: capitalize;
    margin-top: 20px;
  }

  @media (max-width: 426px) {
    .error__text {
      border: none;
      padding-left: 0;
    }
    
    h1 {
      font-size: 60px;
    }
    p {
      margin-top: 10px;
    }
  }
`;

const notFound = () => {
  return (
    <StyledNotFound>
      <img src="#" alt="logo" />
      <div className="error__text">
        <h1>404</h1>
        <p>Apologies! The Page Cannot Be Located</p>
      </div>
    </StyledNotFound>
  );
};

export default notFound;
