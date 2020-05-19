import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col mt-10 items-center">
      <img className="ml-4 h-32" src="/waffle.svg"></img>
      <h1 className="text-waffle logo-shadow font-lemon text-6xl tracking-wide">
        Tech Waffle
      </h1>
    </div>
  );
};

export default Logo;
