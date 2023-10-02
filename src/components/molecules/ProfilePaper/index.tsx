/* eslint-disable @next/next/no-img-element */
import { StyledAdsContainer } from "./style.js";
import { Button } from "@mui/material";

const ProfilePaper = () => {
  return (
    <StyledAdsContainer margin="10px 0" padding="25px 35px">
      <div>
        <h1>Say hello to our fresh GitHub Profile integration.</h1>
        <p>
        Boost your job prospects by showcasing your previous projects! Connect your GitHub and Stack Overflow accounts to kickstart your career
        </p>
        <a href="https://github.com/AhmedIhsan2002">View linked account</a>
      </div>
      <img
        src="/assets/github (1).gif"
        alt="image"
         width={100} height={100} style={{
          marginTop: "2rem",
         }}
      />
    </StyledAdsContainer>
  );
};

export default ProfilePaper;
