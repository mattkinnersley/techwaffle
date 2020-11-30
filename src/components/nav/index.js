import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../heading/Logo";
import cn from "classnames";

const Nav = ({ isHomepage }) => {
  const [scrolled, setScrolled] = useState(false);
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
  const showLogo = !isHomepage || scrolled;
  return (
    <nav
      className={`z-10 bg-white fixed transition-shadow duration-500 ease-in-out flex items-center justify-around min-w-full p-3 top-0 h-20 ${cn(
        { "shadow-lg": scrolled }
      )}`}
    >
      <Link href="/">
        <a className="md:hover:underline">Home</a>
      </Link>

      <Link href="/">
        <a
          className={`-mt-32 transition-all duration-500 ${cn({
            "-mb-32": showLogo,
          })}`}
        >
          <Logo size="48"></Logo>
        </a>
      </Link>

      <Link href="/about">
        <a className="md:hover:underline">About</a>
      </Link>
    </nav>
  );
};

export default Nav;
