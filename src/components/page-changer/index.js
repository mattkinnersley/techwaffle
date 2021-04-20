import PageChangeButton from "./PageChangeButton";

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
