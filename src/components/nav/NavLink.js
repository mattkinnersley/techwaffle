import React from "react";
import Link from "next/link";
import cn from "classnames";

const NavLink = ({ href, selected = false, children }) => {
  return (
    <Link href={href}>
      <a
        className={`transition-colors font-bold p-2 mx-2 rounded-md  ${cn({
          "bg-waffleLight dark:bg-gray-700 pointer-events-none": selected,
          "hover:bg-waffle dark:hover:bg-gray-600": !selected,
        })}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
