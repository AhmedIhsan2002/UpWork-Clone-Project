// components/ChipSet.tsx
import React, { useState } from "react";
import { StyledChipSet } from "./style.js";
import { StyledAlignFlex, StyledFlexCenter } from "@/style/common";
import CloseIcon from "@mui/icons-material/Close";

interface ChipSetProps {
  initialChips: string[];
  maxChips: number;
  onAddChip: (chip: string) => void;
  onDeleteChip: (chip: string) => void;
}

const ChipSet: React.FC<ChipSetProps> = ({
  initialChips,
  maxChips,
  onAddChip,
  onDeleteChip,
}) => {
  const [chips, setChips] = useState<string[]>(initialChips);
  const [inputValue, setInputValue] = useState("");

  const handleAddChip = () => {
    if (inputValue.trim() === "") return;

    if (chips.length >= maxChips) {
      alert(`You can only add up to ${maxChips} chips.`);
      return;
    }

    onAddChip(inputValue);
    setChips([...chips, inputValue]);
    setInputValue("");
  };

  const handleDeleteChip = (chip: string) => {
    onDeleteChip(chip);
    setChips(chips.filter((c) => c !== chip));
  };

  return (
    <StyledChipSet>
      <StyledAlignFlex gap="15px" className="chip-input">
        <StyledAlignFlex gap="5px" className="chip-container">
          {chips.map((chip) => (
            <StyledFlexCenter key={chip} gap="5px" className="chip">
              {chip}
              <CloseIcon
                sx={{ cursor: "pointer", fontSize: 16 }}
                onClick={() => handleDeleteChip(chip)}
              />
            </StyledFlexCenter>
          ))}
        </StyledAlignFlex>
        <input
          type="search"
          placeholder="Search skills"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAddChip();
            }
          }}
        />
      </StyledAlignFlex>
    </StyledChipSet>
  );
};

export default ChipSet;
