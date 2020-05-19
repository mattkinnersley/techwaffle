import React from "react";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen items-center font-quicksand px-48">
    {children}
  </div>
);

export default Layout;
