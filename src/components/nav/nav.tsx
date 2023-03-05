import React from "react";
import NavLink from "../navLink/navLink";

function Nav() {
  return (
    <>
      <div className="h-[10vh] w-full bg-teal-700 grid grid-cols-2 content-center">
        <h1 className="text-3xl text-white ml-3">SRCA</h1>
        <div className="space-x-16 w-fit">
          <NavLink label="Home" link="/" />
          <NavLink label="Enrollment" link="/enrollment" />
          <NavLink label="Students" link="/students" />
          <NavLink label="Staff" link="/staff" />
          <NavLink label="Calendar" link="/calendar" />
          <NavLink label="Contact" link="/contact" />
          <NavLink label="About" link="/about" />
        </div>
      </div>
    </>
  );
}

export default Nav;
