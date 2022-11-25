import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pagesNumber = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  console.log(pagesNumber);
  return (
    <nav>
      <ul className="pagination">
        {pagesNumber.map((pageNum) => (
          <li className="page-item" key={"page_1" + pageNum}>
            <button className="page-link" onClick={() => onPageChange(pageNum)}>
              {pageNum}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
