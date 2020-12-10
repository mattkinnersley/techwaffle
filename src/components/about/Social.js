import React from "react";

const Social = ({ href, icon, handle }) => {
  return (
    <div className="flex justify-center min-w-full mb-2">
      <a
        href={href}
        target="_blank"
        className="rounded-md border-2 border-gray-800 duration-300 flex group items-center p-2 thumbnail-shadow transition"
      >
        {icon}
        <span className="ml-2">{handle}</span>
      </a>
    </div>
  );
};

export default Social;
