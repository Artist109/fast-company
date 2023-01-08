import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const handlerOnChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  useEffect(() => {
    validate();
  }, [data]);

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Email обязателен для заполнения"
      },
      isEmail: {
        message: "Email введён некорректно"
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения"
      },
      hasCapital: {
        message: "Пароль должен содержать хотя бы одну заглавную букву"
      },
      hasDigit: {
        message: "Пароль должен содержать хотя бы одно число"
      },
      hasWhitespace: {
        message: "Пароль не должен содержать пробелов"
      },
      hasMinLength: {
        message: "Пароль должен содержать не меньше 8 символов",
        value: 8
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = validate();
    // if (!isValid) return;
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handlerOnChange}
        error={errors.email}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handlerOnChange}
        error={errors.password}
      />
      <button>Отправить</button>
    </form>
  );
};

export default Login;
