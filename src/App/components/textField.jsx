import React, { useState } from "react";
import PropTypes from "prop-types";

function TextField({ label, type, name, value, onChange, error }) {
  const [showPassword, setShowPassword] = useState(false);

  const toogleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  console.log(showPassword);

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  return (
    <div className="m-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword ? "text" : type}
          id={name}
          value={value}
          name={name}
          onChange={onChange}
          className={getInputClasses()}
        ></input>
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toogleShowPassword}
          >
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
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
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onChange: PropTypes.func
};

export default TextField;
