import React from "react";
import ContactButton from "./ContactButton";
import Mail from "./Mail";
import Twitter from "./Twitter";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-2xl mt-2 mb-4 font-quicksand-bold">Get in touch</h3>
      <div className="flex min-w-full justify-around">
        <ContactButton href="https://www.twitter.com/techwaffler">
          <Twitter />
        </ContactButton>
        <ContactButton href="mailto:matt@techwaffle.dev">
          <Mail />
        </ContactButton>
      </div>
    </div>
  );
};

export default Contact;
