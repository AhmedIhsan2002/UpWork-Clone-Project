import CheckboxLabels from "@/components/atoms/Checkbox";
import Input from "@/components/atoms/Input";
import { StyledAlignFlex } from "@/style/common";
import { useState } from "react";
import { StyledSearchDropdown } from "./style.js";

interface SearchDropdownProps {
  options: string[]; // Replace with the actual type of your options
  onSearch: (query: string) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  options,
  onSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the search query to the parent component
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSearchQuery(option);
    setIsOpen(false);
    onSearch(option); // Pass the selected option to the parent component
  };

  return (
    <StyledSearchDropdown className="search-dropdown">
      <Input
        type="text"
        placeholder="Choose Category"
        name="search"
        leftImage="/assets/search.svg"
        onChange={handleInputChange}
        onClick={toggleDropdown}
        rightImageHidden
      />
      {isOpen && (
        <div className="search_list">
          <p>Financial and Consulting Services</p>
          {options
            .filter((option) => option.includes(searchQuery))
            .map((option) => (
              <StyledAlignFlex
                gap="10px"
                padding="0 15px"
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                <CheckboxLabels label={option} sx={{ marginTop: "15px" }} />
              </StyledAlignFlex>
            ))}
        </div>
      )}
    </StyledSearchDropdown>
  );
};

export default SearchDropdown;
