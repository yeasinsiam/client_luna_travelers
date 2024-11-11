import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, headerLayout = 1 }) {
  return (
    <>
      <Header headerLayout={headerLayout} />
      {children}
      <Footer />
    </>
  );
}
