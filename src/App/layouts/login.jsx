import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegistrationForm from "../components/ui/registrationForm";

const Login = () => {
  const { type } = useParams();

  const [formType, setFormType] = useState(
    type === "registration" ? type : "login"
  );

  const toogleChangeType = (type) => {
    setFormType((prev) => (prev === "registration" ? "login" : "registration"));
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-4 shadow rounded">
          {formType === "registration" ? (
            <>
              <h3 className="m-4">Зарегистрироваться</h3>

              <RegistrationForm />
              <p>
                У вас уже есть аккаунт?{" "}
                <a role="button" onClick={toogleChangeType}>
                  Войти
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="m-4">Авторизоваться</h3>

              <LoginForm />
              <p>
                У вас ешё нет аккаунта?{" "}
                <a role="button" onClick={toogleChangeType}>
                  Зарегистрироваться
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
