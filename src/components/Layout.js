import React, { useEffect, useState } from "react";
import Logo from "./heading/Logo";
import cn from "classnames";
import Link from "next/link";

const Layout = ({ isHomepage = false, children }) => {
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
  return (
    <div className="min-w-full font-quicksand text-xl flex flex-col items-center">
      <nav
        className={`fixed transition-all duration-500 ease-in-out flex items-center justify-around min-w-full p-3 top-0 h-20 ${cn(
          { "shadow-md bg-white": scrolled }
        )}`}
      >
        <Link href="/">
          <a className="md:hover:underline">Home</a>
        </Link>
        <Link href="/">
          <a
            className={`transition-all duration-500 ease-in-out ${cn({
              "logo-hidden": !scrolled && isHomepage,
            })}`}
          >
            <Logo size={12}></Logo>
          </a>
        </Link>

        <Link href="/about">
          <a className="md:hover:underline">About</a>
        </Link>
      </nav>
      <div className="flex flex-col min-h-screen px-5 pb-5 md:px-10 md:pb-10 pt-32 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-5/12">
        {children}
      </div>
    </div>
  );
};

export default Layout;
