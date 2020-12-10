import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../heading/Logo";
import cn from "classnames";
import NavLink from "./NavLink";
import { useRouter } from "next/router";

const Nav = () => {
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
      className={`z-10 bg-white fixed transition-shadow duration-500 ease-in-out flex justify-center min-w-full top-0 h-20 ${cn(
        { "shadow-lg": scrolled }
      )}`}
    >
      <div className="flex items-center justify-between container px-5 md:px-10 lg:px-32 md:mx-10">
        <Link href="/">
          <a>
            <Logo size="48" lazy></Logo>
          </a>
        </Link>
        <div>
          <NavLink href="/" selected={isHomepage}>
            Home
          </NavLink>

          <NavLink href="/about" selected={pathname === "/about"}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
