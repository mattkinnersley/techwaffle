import React from "react";

const ContactButton = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="rounded-md border-2 border-gray-800 duration-300 flex group items-center p-2 thumbnail-shadow transition bg-white"
    >
      {children}
    </a>
  );
};

export default ContactButton;
