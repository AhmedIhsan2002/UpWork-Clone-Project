import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Link from "next/link.js";
import { StyledOverviewDialog } from "./style.js";
import Input from "@/components/atoms/Input";
import {
  StyledAlignFlex,
  StyledBetweenAlignFlex,
  StyledBetweenFlexStart,
} from "@/style/common";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ToolButton from "@/components/atoms/ToolButton";
import {
  StyledDialog,
  dialogStyle,
} from "@/components/organism/Dialog/style.js";
import { Button, Dialog, DialogActions } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

interface OverviewProps {
  description: string;
}

export const formSchema = Yup.object({
  description: Yup.string()
    .required("This field is required.")
    .min(
      100,
      "Too short. An effective overview needs to be at least 100 characters."
    ),
});

const OverviewDialog = () => {
  const [open, setOpen] = useState(false);
  const openToggle = () => {
    setOpen(!open);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OverviewProps>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: OverviewProps) => {
    // login(data);
    reset();
  };

  return (
    <div>
      <StyledBetweenFlexStart gap="10px">
        <p>
          I&apos;m a Software engineer and  Back-end developer PHP-Laravel.
          <br />
          I&apos;m a Laravel  developer skilled in building  website , wAC
          applications using php , laravel , Blade  , livewhere , sass and DB : MYSQL-PHPMYADMIN
          "I am well-versed in working with React, Redux, and styled-components. I offer comprehensive project management and emphasize consistent communication to ensure successful results. Let's collaborate to breathe life into your web projects.
        </p>
        <ToolButton>
          <EditIcon fontSize="small" onClick={() => openToggle()} />
        </ToolButton>
      </StyledBetweenFlexStart>

      <Dialog open={open} PaperProps={{ style: dialogStyle }}>
        <StyledBetweenAlignFlex margin="0 0 3rem">
          <h2>Overview</h2>
          <CloseIcon
            sx={{ cursor: "pointer" }}
            fontSize="medium"
            onClick={openToggle}
          />
        </StyledBetweenAlignFlex>

        <StyledOverviewDialog>
          <div className="text">
            <p>
              Use this space to show clients you have the skills and experience
              they are looking for.
            </p>
            <ul>
              <li>Describe your strengths and skills</li>
              <li>Highlight projects, accomplishments and education</li>
              <li>Keep it short and make sure it is error-free</li>
            </ul>
            <Link
              href="https://support.upwork.com/hc/en-us/articles/360016252373"
              target="_blank"
            >
              Learn more
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="box">
              <Input
                type="textarea"
                placeholder="Example: I am a NET developer with a Bachelor of Science (B.S.) in Information Technology from Bulacan State University and 5 years of software development experience
              I am experienced in windows and web development with Microsoft technologies using C# ASP.NET VB.NET. ADO.NET and LINQ web services. I have a working experience with Model View Controller (MVC), and have been involved in maintaining versions of source code using TFS (Team Foundation Server) 2010. I have also designed and developed web user controls, master pages, validation controls, CSS files using technologies like AJAX Toolkit, JQuery, JavaScript. Telerik Ut controls. XML HTML and DTML
              When working on a new project. I like to speak with my clients so that I can have a clear understanding of their needs and vision of the project. Thank you in advance for your time and consideration. I look forward to working with you soon."
                name="description"
                imageHidden
                // register={register}
              />
              <span>5000 character left</span>
            </div>
            {errors.description && (
              <StyledAlignFlex gap="8px" margin="5px 0 0 0">
                <ErrorOutlineIcon
                  sx={{ color: "var(--danger-color)", fontSize: 16 }}
                />
                <p className="error">{errors.description.message}</p>
              </StyledAlignFlex>
            )}
          </form>
        </StyledOverviewDialog>

        <StyledDialog>
          <DialogActions>
            <StyledAlignFlex gap="10px" margin="25px 0 0">
              <Button onClick={() => openToggle()} variant="contained">
                Cancel
              </Button>
              <Button onClick={() => {}} variant="contained">
                Save
              </Button>
            </StyledAlignFlex>
          </DialogActions>
        </StyledDialog>
      </Dialog>
    </div>
  );
};

export default OverviewDialog;
