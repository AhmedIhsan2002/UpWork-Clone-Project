import React from "react";
import MainLayout from "../../components/organism/MainLayout";

const layoutAppPages = ({children,}: {children: React.ReactNode}) => {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default layoutAppPages;
