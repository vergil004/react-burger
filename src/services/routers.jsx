import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage, NotFoundPage, Profile } from "@/pages";
import { AppHeader } from "@/components/app-header/app-header";

export const Routers = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route exact={true} path="/">
          <MainPage />
        </Route>
        <Route exact={true} path="/profile">
          <Profile />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};
