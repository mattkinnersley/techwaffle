import cn from "classnames";
import Chevron from "../svg/Chevron";

const PageChangeButton = ({ onClick, disabled, className = "", ...props }) => (
  <button
    className={`transition-borderShadow duration-300 rounded-md border-2 border-gray-800 w-8 bg-white dark:bg-gray-600 font-quicksand-bold active:shadow-inner disabled:opacity-25 ${cn(
      {
        "dark:border-yellow-50": !disabled,
      }
    )} ${className}`}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <Chevron />
  </button>
);

const PageChanger = ({ previousPage, nextPage, currentPage, pageLimit }) => (
  <div className="flex items-center my-4">
    <PageChangeButton
      disabled={currentPage === 1}
      onClick={() => previousPage()}
      className="transform rotate-180"
      aria-label="Previous page of posts"
    />
    <span className="px-2 text-2xl w-10 text-center font-quicksand-bold">
      {currentPage}
    </span>
    <PageChangeButton
      disabled={currentPage === pageLimit}
      onClick={() => nextPage()}
      aria-label="Next page of posts"
    />
  </div>
);

export default PageChanger;
