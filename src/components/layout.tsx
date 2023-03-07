import React from "react";
import Banner from "./banner";
import Footer from "./footer";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <Banner />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
