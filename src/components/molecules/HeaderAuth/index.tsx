"use client"
import Logo from '@/components/atoms/Logo';
import { StyledAlignFlex } from '@/style/common';
import { StyledHeaderAuth } from './style.js';

const HeaderAuth = () => {
  return (
    <StyledHeaderAuth as='header'>
      <Logo />
      <StyledAlignFlex gap='4px'>
        <p>"Searching for job opportunities?</p>
        <span>Submit your application as a talent.</span>
      </StyledAlignFlex>
    </StyledHeaderAuth>
  )
}

export default HeaderAuth;