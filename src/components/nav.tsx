import React from "react";
import NavLink from "./navLink";
import navLinks from "../data/navLinks";

function Nav() {
  return (
    <>
      <div className="h-[12vh] w-full bg-teal-700 grid place-items-center">
        <div className="space-x-16 w-fit">
          {navLinks.map((item) => (
            <NavLink label={item.label} link={item.link} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Nav;
