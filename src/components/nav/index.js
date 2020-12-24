import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../heading/Logo";
import cn from "classnames";
import NavLink from "./NavLink";
import { useRouter } from "next/router";
import ToggleButton from "../dark-mode/ToggleButton";

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
        <Link href="/">
          <a>
            <Logo size="48" lazy></Logo>
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
