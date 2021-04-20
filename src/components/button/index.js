import { sendSelectContentEvent } from "@techwaffle/utils/ga";

const Button = ({ href, children, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="transition-shadow duration-300 rounded-md w-min border-2 border-gray-800 flex group items-center p-2 thumbnail-shadow bg-white dark:bg-gray-800 dark:border-yellow-50"
      onClick={() =>
        sendSelectContentEvent({
          content_type: "external href",
          item_id: href,
        })
      }
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
