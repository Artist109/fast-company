import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import NavBar from "./components/ui/navbar";

import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Main}></Route>
        <Route path={"/login:type?"} component={Login}></Route>
        <Route path={"/users/:userId?/:edit?"} component={Users}></Route>
        <Redirect to={Main} />
      </Switch>
    </>
  );
}

export default App;
