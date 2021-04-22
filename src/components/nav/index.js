import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../logo";
import cn from "classnames";
import { useRouter } from "next/router";
import ToggleButton from "../toggle-button";

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

const Nav = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useRouter();
  const isHomepage = pathname === "/";
  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={`transition duration-1000 z-10 bg-white fixed flex justify-center min-w-full top-0 h-20 ${cn(
        {
          "shadow-lg dark:bg-gray-800": scrolled,
          "dark:bg-gray-900": !scrolled,
        }
      )}`}
    >
      <div className="flex items-center justify-between container px-5 md:px-10 lg:px-32 md:mx-10">
        <a
          href="#content"
          className="absolute -top-12 focus:top-auto z-10 p-2 bg-white dark:bg-gray-800"
        >
          Skip to main content
        </a>
        <Link href="/">
          <a>
            <Logo size="48"></Logo>
          </a>
        </Link>
        <div className="flex items-center w-full justify-evenly sm:w-auto">
          <NavLink href="/" selected={isHomepage}>
            Home
          </NavLink>

          <NavLink href="/about" selected={pathname === "/about"}>
            About
          </NavLink>
          <ToggleButton theme={theme} setTheme={setTheme}></ToggleButton>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
