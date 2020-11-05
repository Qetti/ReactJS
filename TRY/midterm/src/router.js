import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Post from './components/dataLoading/Post';
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import NotFound from "./pages/notFound";
import { PrivateRoute } from "./components/privateRoute";
import history from "./utils/helpers/history";

const RouterComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
export default RouterComponent;
