import React from "react";
import Image from "next/image";

const Logo = ({ size, className }) => (
  <Image
    className={className}
    src="/waffle.png"
    alt="waffle logo"
    height={size}
    width={size}
    lazy="true"
  ></Image>
);

export default Logo;
