import React, { useEffect, useState } from "react";
import Footer from "../footer";
import Nav from "../nav";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.theme || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme !== window.localStorage.theme) {
      window.localStorage.theme = theme;
    }
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div
      className={`transition-background duration-1000 min-w-full font-quicksand text-xl flex flex-col items-center text-gray-800 dark:text-yellow-50 dark:bg-gray-900`}
    >
      <Nav theme={theme} setTheme={setTheme} />
      <main
        id="content"
        className="flex flex-col min-h-screen px-5 pb-5 md:px-10 md:pb-10 md:mx-10 lg:px-32 pt-32 container"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
