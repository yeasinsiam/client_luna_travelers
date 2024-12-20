import React from "react";
import Tagline from "./tagline";
import Navbar from "./navbar";

export default function Header({ headerLayout = 1 }) {
  return (
    <>
      {headerLayout == 1 && (
        <>
          <Tagline />
          <Navbar
            navclass="defaultscroll is-sticky tagline-height"
            navlight={false}
            manuclass="justify-end "
          />
          <div className=" lg:py-14"></div>
        </>
      )}
      {headerLayout == 2 && (
        <>
          <Navbar
            navclass="defaultscroll is-sticky"
            navlight={false}
            manuclass="justify-end"
          />
          <div className="py-10 "></div>
        </>
      )}
    </>
  );
}
