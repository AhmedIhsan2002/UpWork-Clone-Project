"use client";
/* eslint-disable @next/next/no-img-element */
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Input from "@/components/atoms/Input";
import { StyledAlignFlex, StyledFlexCenter, StyledPage } from "@/style/common";
import Link from "next/link";
import CheckboxLabels from "@/components/atoms/Checkbox";
import { Button } from "@mui/material";
import HaveAccount from "@/components/atoms/HaveAccount";
import { StyledSignUp } from "./style.js";
import SelectSmall from "@/components/atoms/Select";
import { useState } from "react";
import ReportIcon from "@mui/icons-material/Report";
import { PATHS } from '@/constants/path';
import { useAuthContext } from '@/context/AuthContext';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  checked?: boolean | undefined;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const formSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("last name is required"),

  email: Yup.string()
    .matches(emailRegex, "Enter Correct Email")
    .required("Email address is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(15, "Password must be at least 15 characters long")
    .matches(
      RegExp("(.*[a-z].*)"),
      "Password must contain at least one Lowercase letter"
    )
    .matches(
      RegExp("(.*[A-Z].*)"),
      "Password must contain at least one Uppercase letter"
    )
    .matches(RegExp("(.*\\d.*)"), "Password must contain at least one Number ")
    .matches(
      RegExp('[!@#$%^&*(),.?":{}|<>]'),
      "Password must contain at least one Special character"
    ),

  checked: Yup.boolean().oneOf(
    [true],
    "Kindly agree to the Upwork Terms of Service before proceeding"
  ),
});

const SignUpForm = () => {
  const [showPass, setShowPass] = useState(false);
  const { handleAUTHENTICATE, isLoading } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(formSchema),
  });


  const onSubmit = async (data: SignUpFormData) => {
    handleAUTHENTICATE(data);
    reset();
  };

  const hadnleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <StyledPage>
      <StyledFlexCenter padding="0 15px">
        <StyledSignUp padding="40px 30px">
          <h1>Sign up to find work you love</h1>

          <Link href="#">
            <StyledFlexCenter gap="5px">
              <img src="/assets/apple-logo.svg" alt="apple store" />
              <span>Continue with Apple</span>
            </StyledFlexCenter>
          </Link>

          <Link href="#">
            <StyledAlignFlex>
              <img
                src="/assets/google-logo.svg"
                alt="apple store"
                className="google"
              />
              <span>Continue with Google</span>
            </StyledAlignFlex>
          </Link>

          <div className="or"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledAlignFlex gap="25px" className="box">
              <div>
                <Input
                  type="text"
                  placeholder="First name"
                  name="name"
                  imageHidden
                  register={register}
                />
                {errors.firstName && (
                  <StyledAlignFlex gap="5px" margin="5px 0 0 0">
                    <ReportIcon fontSize="small" />
                    <p className="error">{errors.firstName.message}</p>
                  </StyledAlignFlex>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Last name"
                  name="surname"
                  imageHidden
                  register={register}
                />
                {errors.lastName && (
                  <StyledAlignFlex gap="5px" margin="5px 0 0 0">
                    <ReportIcon fontSize="small" />
                    <p className="error">{errors.lastName.message}</p>
                  </StyledAlignFlex>
                )}
              </div>
            </StyledAlignFlex>

            <div className="box">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                imageHidden
                register={register}
              />
              {errors.email && (
                <StyledAlignFlex gap="5px" margin="5px 0 0 0">
                  <ReportIcon fontSize="small" />
                  <p className="error">{errors.email.message}</p>
                </StyledAlignFlex>
              )}
            </div>

            <div className="box">
              <Input
                type={showPass ? "text" : "password"}
                placeholder="Password (8 or more characters)"
                name="password"
                leftImageHidden
                rightImage={
                  showPass ? "/assets/eye.svg" : "/assets/eye-off.svg"
                }
                onClick={hadnleShowPass}
                register={register}
              />
              {errors.password && (
                <StyledAlignFlex gap="5px" margin="5px 0 0 0">
                  <ReportIcon fontSize="small" />
                  <p className="error">{errors.password.message}</p>
                </StyledAlignFlex>
              )}
            </div>

            <SelectSmall
              option1='Palestinian Territories'
              option2='Egypt'
              option3='Jordan'
              option4='USA'
            />

            <CheckboxLabels
              label="Send me helpful emails to find rewarding work and job leads."
              sx={{ marginTop: "15px" }}
              defaultChecked
            />

            <div>
              <CheckboxLabels 
                label="Yes, I understand and agree to the Upwork Terms of Service , including the User Agreement and Privacy Policy ."
                sx={{}}
              />
              {errors.checked && (
                <StyledAlignFlex gap="5px" margin="5px 0 0 0">
                  <ReportIcon fontSize="small" />
                  <p className="error">{errors.checked.message}</p>
                </StyledAlignFlex>
              )}
            </div>

            <button type="submit">
              {isLoading ? "Loading..." : "Create my account"}
            </button>

            <HaveAccount
              question="Already have an account?"
              path={PATHS.LOGIN}
              linkText="Log In"
              showLink={true}
            />
          </form>
        </StyledSignUp>
      </StyledFlexCenter>
    </StyledPage>
  );
};

export default SignUpForm;
