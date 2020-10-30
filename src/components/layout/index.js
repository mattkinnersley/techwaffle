import React, { useEffect, useState } from "react";
import Logo from "../heading/Logo";
import Link from "next/link";
import Meta from "../meta";
import Nav from "../nav";
import Container from "./Container";

const Layout = ({ title, description, isHomepage = false, children }) => {
  return (
    <>
      <Meta title={title} description={description}></Meta>
      <div className="min-w-full font-quicksand text-xl flex flex-col items-center">
        <Nav isHomepage={isHomepage}></Nav>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
