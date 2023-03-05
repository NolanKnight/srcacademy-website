import React from "react";
import Footer from "../footer/footer";
import Nav from "../nav/nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
