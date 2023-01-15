import React from "react";
import PropTypes from "prop-types";

function CheckBoxField({ name, value, onChange, children, error }) {
  const handleChange = (e) => {
    onChange({ name: name, value: !value });
    console.log(e);
  };

  const getInputClasses = () => {
    return "form-check-input" + (error ? " is-invalid" : "");
  };

  return (
    <div className="form-check form-check-inline mb-4 ">
      <input
        className={getInputClasses()}
        type="checkbox"
        id={name}
        onChange={handleChange}
        checked={value}
      ></input>
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  error: PropTypes.string,
  onChange: PropTypes.func
};

export default CheckBoxField;
