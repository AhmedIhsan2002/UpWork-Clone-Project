import { StyledAlignFlex, StyledFlexCenter } from "@/style/common";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import LinkIcon from "@mui/icons-material/Link";

type SidebarProps = {
  text: string;
  addIcon?: boolean;
  editIcon?: boolean;
  deleteIcon?: boolean;
  linkIcon?: boolean;
  children?: React.ReactNode;
  onEditClicked?: (params: any) => any;
};

const StyledSidebarControl = styled.section`
  padding: 15px 0px;
  strong {
    font-weight: 600;
  }
  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid var(--gray-200-color);
    cursor: pointer;
    color: var(--primary-color);
    background-color: var(--white-color);
  }
  button:hover {
    background-color: var(--secondary-color);
  }
`;

const SidebarControlProfile = ({
  text,
  addIcon = false,
  editIcon = false,
  deleteIcon = false,
  linkIcon = false,
  children,
  onEditClicked
}: SidebarProps) => {
  return (
    <StyledSidebarControl>
      <StyledAlignFlex gap="15px">
        <strong>{text}</strong>
        {addIcon && (
          <StyledFlexCenter as="button">
            <AddIcon />
          </StyledFlexCenter>
        )}
        {editIcon && (
          <StyledFlexCenter as="button">
            <EditIcon fontSize="small" onClick={onEditClicked} />
          </StyledFlexCenter>
        )}
        {deleteIcon && (
          <StyledFlexCenter as="button">
            <DeleteIcon />
          </StyledFlexCenter>
        )}
        {linkIcon && (
          <StyledFlexCenter as="button">
            <LinkIcon />
          </StyledFlexCenter>
        )}
      </StyledAlignFlex>
      {children}
    </StyledSidebarControl>
  );
};

export default SidebarControlProfile;
