import React, { useState } from "react";
import TextField from "../components/textField";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const handlerOnChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  return (
    <form action="">
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handlerOnChange}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handlerOnChange}
      />
    </form>
  );
};

export default Login;
