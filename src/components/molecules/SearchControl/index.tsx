import PopoverPopupState from "@/components/atoms/SaveSearchButton";
import SearchInput from "@/components/atoms/SearchInput";
import {
  StyledAlignFlex,
  StyledBetweenAlignFlex,
  StyledFlexCenter,
} from "@/style/common";
import { StyledSearchControl } from "./style.js";
import Link from "next/link.js";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import MenuIcon from "@mui/icons-material/Menu";
import SelectSmall from "@/components/atoms/Select";

const SearchControl = () => {
  return (
    <StyledSearchControl>
      <StyledAlignFlex gap="15px">
        <SearchInput />
        <PopoverPopupState />
      </StyledAlignFlex>
      <Link href="#">Enhanced Search</Link>
      <StyledBetweenAlignFlex gap="15px" margin='20px 0 15px'>
        <StyledAlignFlex gap="8px">
          <RssFeedIcon sx={{ color: 'var(--green-color)' }} />
          <StyledAlignFlex gap="2px">
            <span>183</span>
            <p>jobs found</p>
          </StyledAlignFlex>
        </StyledAlignFlex>
        <StyledAlignFlex gap="15px">
          <StyledAlignFlex gap="5px">
            <span>Sort:</span>
            <SelectSmall
              option1='Relevance'
              option2='Newest'
              option3='Client spend'
              option4='Client rating'
            />
          </StyledAlignFlex>
          <StyledAlignFlex gap="5px">
            <span>View:</span>
            <StyledFlexCenter as="button" className="menu">
              <MenuIcon />
            </StyledFlexCenter>
          </StyledAlignFlex>
        </StyledAlignFlex>
      </StyledBetweenAlignFlex>
    </StyledSearchControl>
  );
};

export default SearchControl;
