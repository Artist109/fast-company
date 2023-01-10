import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data, onSort, selectedSort, columns, children }) => {
  return (
    <table className="table rounded" style={{ backgroundColor: "#fff" }}>
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns }} />
          <TableBody {...{ data, columns }} />
        </>
      )}
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onSort: PropTypes.func,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired
};
export default Table;
