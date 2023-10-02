import HeaderAuth from '@/components/molecules/HeaderAuth';
import React from 'react'
import { ReactNode } from "react";

type AuthProps = {
  children: ReactNode,
}

const LayoutAuth = ({ children }: AuthProps) => {
  return (
    <>
      <div>
        <HeaderAuth />
        {children}
      </div>
    </>
  )
}

export default LayoutAuth;