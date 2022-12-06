import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns }) => {
  //  console.log(
  //    "map",
  //    data.map((item) =>
  //      Object.keys(columns).map((column) => item[columns[column].path])
  //    )
  //  );
  //  console.log("TB", columns);

  const renderContent = (item, column) => {
    if (columns[column].component) {
      const component = columns[column].component;
      if (typeof component === "function") {
        return component(item);
      }
      return component;
    }
    return _.get(item, columns[column].path);
  };
  return (
    <tbody>
      {/* идем по юзерам, т.е. строкам: */}
      {data.map((item) => (
        // а теперь в каждой строке идем по столбцам:
        <tr key={item._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderContent(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired
};
export default TableBody;
