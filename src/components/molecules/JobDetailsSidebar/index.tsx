import { Button } from "@mui/material";
import { StyledJobDetailsSidabar } from "./style.js";
import { StyledAlignFlex, StyledFlexCenter } from "@/style/common";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link.js";
import FlagIcon from "@mui/icons-material/Flag";
import VerifiedIcon from "@mui/icons-material/Verified";
import Rating from "@mui/material/Rating";

const JobDetailsSidebar = () => {
  return (
    <StyledJobDetailsSidabar>
      <article>
        <Button>Apply Now</Button>
        <Button>
          <StyledFlexCenter gap="8px">
            <FavoriteBorderIcon fontSize="small" />
            Save Jop
          </StyledFlexCenter>
        </Button>
        <StyledAlignFlex gap="8px">
          <FlagIcon sx={{ color: "var(--primary-color)", fontSize: 16 }} />
          <Link href="#">Mark as inappropriate.</Link>
        </StyledAlignFlex>
        <p>Submit a proposal for: 10 Connects</p>
        <p>Available Connects: 30</p>
      </article>
      
      <article className="about">
        <h3>About the client</h3>
        <div className="rating">
          <StyledAlignFlex gap="8px">
            <VerifiedIcon
              sx={{ color: "var(--primary-color)", fontSize: "16px" }}
            />
            <p>Payment method successfully authenticated</p>
          </StyledAlignFlex>
          <StyledAlignFlex gap="8px" className="rate">
            <Rating
              name="size-small"
              defaultValue={5}
              readOnly
              sx={{ color: "green", fontSize: 23 }}
              className="start"
            />
            <span className="span">7.00 of 7 reviews</span>
          </StyledAlignFlex>
        </div>
        <div className="location">
          <p>Turkey</p>
          <span className="span">Istanbul 6:56 pm</span>
        </div>
        <div className="location">
          <p>21 jobs posted</p>
          <span className="span">A hiring success rate of 20%, with 7 active job opportunities.</span>
        </div>
        <div className="location">
          <p>$450 total spent</p>
          <span className="span">7 hires, 1.5 active</span>
        </div>
        <span className="span">Member since oct 2, 2023</span>
      </article>

      <article className="job_link">
        <h3>Job link</h3>
        <Button disabled>https://www.upwork.com/jo</Button>
        <Link href="#">Copy link</Link>
      </article>
    </StyledJobDetailsSidabar>
  );
};

export default JobDetailsSidebar;
