import Chevron from "../svg/Chevron";
import cn from "classnames";

const PageChangeButton = ({ onClick, disabled, className = "" }) => (
  <button
    className={`transition-borderShadow duration-300 rounded-md border-2 border-gray-800 w-8 bg-white dark:bg-gray-600 font-quicksand-bold active:shadow-inner disabled:opacity-25 ${cn(
      {
        "dark:border-yellow-50": !disabled,
      }
    )} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    <Chevron />
  </button>
);

export default PageChangeButton;
