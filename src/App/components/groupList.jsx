import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  selectedItem,
  onItemSelect
}) => {
  console.log(selectedItem);
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => {
        return (
          <li
            key={items[item][valueProperty]}
            className={
              "list-group-item" +
              (items[item] === selectedItem ? " active" : "")
            }
            role="button"
            onClick={() => onItemSelect(items[item])}
          >
            {items[item][contentProperty]}
          </li>
        );
      })}
    </ul>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object], [PropTypes.array]).isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired
};

export default GroupList;
