'use client'
import React, {useEffect, useState} from 'react'
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import { StyledFloading } from './style.js';

const FloatingButton = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 600) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <StyledFloading>
      {scrollToTop && (
        <button onClick={scrollUp}><KeyboardArrowUpSharpIcon sx={{ fontSize: "28px" }} /></button>
      )}
    </StyledFloading>
  )
}

export default FloatingButton;