import React from "react";

const Logo = () => {
  return (
    <div className="flex mt-10 items-center">
      <h1 className="text-waffle logo-shadow font-lemon text-6xl">
        Tech Waffle
      </h1>
      <img className="ml-4 h-24" src="/waffle.svg"></img>
    </div>
  );
};

export default Logo;
