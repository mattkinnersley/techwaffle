import React from "react";
import Logo from "./Logo";
import Subtitle from "./Subtitle";

const Heading = () => {
  return (
    <div className="flex flex-col items-center">
      <Logo></Logo>
      <Subtitle></Subtitle>
    </div>
  );
};

export default Heading;
