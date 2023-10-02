"use client";
/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent } from 'react';
import { StyledInput } from './style';

type InputProps = {
  leftImage?: string,
  rightImage?: string,
  type: string,
  placeholder: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  imageHidden?: boolean,
  leftImageHidden?: boolean,
  rightImageHidden?: boolean,
  removeArrow?: boolean,
  name?: string,
  value?: string;
  onClick?: () => void;
  register?: {name: string};
}

const Input = ({
  leftImage,
  rightImage,
  type,
  placeholder,
  onChange,
  imageHidden = false,
  leftImageHidden = false,
  rightImageHidden = false,
  removeArrow = false,
  name,
  value,
  onClick,
  register = {name: ""},
}: InputProps) => {

  return (
    <StyledInput gap="8px">
      <img
        src={leftImage}
        alt="icon"
        className={`${imageHidden ? "image__hidden" : leftImageHidden ? "left_image_hidden" : ""}`}
      />
      {type === "text" ||
      type === "email" ||
      type === "password" ||
      type === "number" ||
      type === "search" ? (
        <input
          className={`${removeArrow ? "remove__arrow" : ""}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onClick={() => onClick}
          id={name}
          autoComplete='off'
          {...register}
        />
      ) : (
        <textarea placeholder={placeholder}></textarea>
      )}
      <img
        src={rightImage}
        alt="icon"
        className={`${imageHidden ? "image__hidden" : rightImageHidden ? "right_image_hidden" : ""}`}
        onClick={onClick}
      />
    </StyledInput>
  );
};

export default Input;
