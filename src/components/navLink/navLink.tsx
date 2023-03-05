import React from "react";

function NavLink(props) {
  return (
    <a href={props.link} className="text-white text-xl">
      {props.label}
    </a>
  );
}

export default NavLink;
