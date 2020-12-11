import React from "react";
import Image from "next/image";

const Logo = ({ size, className, lazy = false }) => (
  <Image
    className={className}
    src="/waffle.png"
    alt="round waffle cartoon"
    height={size}
    width={size}
    lazy={lazy.toString()}
  ></Image>
);

export default Logo;
