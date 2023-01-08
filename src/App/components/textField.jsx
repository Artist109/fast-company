import React from "react";
import PropTypes from "prop-types";

function TextField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={onChange}
      ></input>
    </div>
  );
}
TextField.defaultProps = {
  type: "text"
};
TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextField;
