import React, { useEffect, useState } from "react";
import Footer from "../footer";
import Meta from "../meta";
import Nav from "../nav";
import Container from "./Container";
import cn from "classnames";

const Layout = ({ title, description, children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      console.log("default: " + window.localStorage.theme);
      window.localStorage.theme;
    }
    return "light";
  });

  const setLocalTheme = (theme) => {
    setTheme(theme);
    console.log("setting theme: " + theme);
    window.localStorage.theme = theme;
  };

  useEffect(() => {
    console.log("useEffect: " + window.localStorage.theme);
    setLocalTheme(window.localStorage.theme || "light");
  }, []);

  return (
    <div
      className={cn({
        dark: theme === "dark",
      })}
    >
      <Meta title={title} description={description}></Meta>
      <div
        className={`transition-background duration-1000 min-w-full font-quicksand text-xl flex flex-col items-center text-gray-800 dark:text-yellow-50 dark:bg-gray-900`}
      >
        <Nav theme={theme} setTheme={setLocalTheme} />
        <Container>{children}</Container>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
