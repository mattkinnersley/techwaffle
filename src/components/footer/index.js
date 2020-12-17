import React from "react";
import Contact from "../contact";
import EmailForm from "./email";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center pb-16 pt-5 min-w-full bg-waffleLight">
      <div className="flex flex-col justify-center items-center sm:w-8/12 lg:w-6/12 xl:w-4/12">
        <h3 className="text-2xl mt-4 font-quicksand-bold">
          Want to stay updated?
        </h3>
        <p className="mb-4">I'll let you know when I upload a new article.</p>
        <EmailForm />
      </div>
      <Contact />
    </footer>
  );
};

export default Footer;
