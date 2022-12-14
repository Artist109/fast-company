import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar";

import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Main}></Route>
        <Route path={"/login"} component={Login}></Route>
        <Route path={"/users/:userId?"} component={Users}></Route>
        <Redirect to={Main} />
      </Switch>
    </>
  );
}

export default App;
