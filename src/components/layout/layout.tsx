import React from "react";
import Nav from "../nav/nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default Layout;
