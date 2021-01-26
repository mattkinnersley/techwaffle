import { useState } from "react";

export const usePagination = (data, maxPerPage = 5, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const pageLimit = Math.ceil(data.length / maxPerPage);
  const firstPageItem = (currentPage - 1) * maxPerPage;
  const lastPageItem = firstPageItem + maxPerPage;
  let currentData = data.slice(firstPageItem, lastPageItem);

  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, pageLimit));
  };
  const previousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };
  return [currentData, { currentPage, pageLimit, nextPage, previousPage }];
};
