import React from "react";

const Container = ({ children }) => (
  <div className="flex flex-col min-h-screen px-5 pb-5 md:px-10 md:pb-10 md:mx-10 lg:px-32 pt-32 container">
    {children}
  </div>
);

export default Container;
