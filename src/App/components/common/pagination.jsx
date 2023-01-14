import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pagesNumber = _.range(1, pageCount + 1);
  if (pageCount === 1) return null;
  return (
    <nav>
      <ul className="pagination">
        {pagesNumber.map((pageNum) => (
          <li
            className={"page-item" + (pageNum === currentPage ? " active" : "")}
            key={"page_1" + pageNum}
          >
            <button className="page-link" onClick={() => onPageChange(pageNum)}>
              {pageNum}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};
export default Pagination;
