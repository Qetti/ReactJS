import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import NotFound from "./pages/notFound";
import { PrivateRoute } from "./components/privateRoute";
import history from "./utils/helpers/history";
import Admin from "./pages/admin/Admin";

import './css/bootstrap.min.css';
import "./css/app.css";


const RouterComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/admin" exact component={Admin} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
export default RouterComponent;