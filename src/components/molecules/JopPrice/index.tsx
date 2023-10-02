import { StyledBetweenFlex, StyledFlex } from "@/style/common";
import DiamondIcon from "@mui/icons-material/Diamond";
import { StyledJopPrice } from "./style.js";
import SellIcon from "@mui/icons-material/Sell";
import PsychologyIcon from "@mui/icons-material/Psychology";

const JobPrice = () => {
  return (
    <StyledJopPrice className="price">
      <StyledBetweenFlex gap="10px">
        <StyledFlex gap="8px">
          <DiamondIcon sx={{ fontSize: 18 }} />
          <div className="text">
            <span>Featured Job</span>
          </div>
        </StyledFlex>
        <StyledFlex gap="8px">
          <SellIcon sx={{ fontSize: 18 }} />
          <div className="text">
            <span>$200.00</span>
            <span>Fixed-price</span>
          </div>
        </StyledFlex>
        <StyledFlex gap="8px">
          <PsychologyIcon sx={{ fontSize: 18 }} />
          <div className="text">
            <span>Intermediate</span>
            <span>I am looking for a mix of experience and value</span>
          </div>
        </StyledFlex>
      </StyledBetweenFlex>
    </StyledJopPrice>
  );
};

export default JobPrice;
