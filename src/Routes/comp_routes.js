import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../Components/User/UserProfile";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import MainDashboard from "../Components/User/UserMain";
import Dashboard from "../Components/User/dashboard";
import AdminPage from "../Components/Admin/Admin";
const BaseRouter = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>{" "}
    <Route exact path="/Signup">
      <Signup />
    </Route>
    <MainDashboard>
      <Route exact path="/userPage">
        <Dashboard />
      </Route>
      <Route exact path="/userProfile">
        <Profile />
      </Route>
    </MainDashboard>
    <Route exact path="/adminPage">
      <AdminPage />
    </Route>
  </Switch>
);
export default BaseRouter;
