import React from "react";
import Link from "next/link";
import cn from "classnames";

const NavLink = ({ href, selected = false, children }) => {
  return (
    <Link href={href}>
      <a
        className={`transition-colors duration-500 font-bold p-2 mx-2 rounded-md  ${cn(
          {
            "bg-waffleLight pointer-events-none": selected,
            "hover:bg-waffle": !selected,
          }
        )}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
