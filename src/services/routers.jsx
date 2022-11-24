import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage, NotFoundPage, ProfilePage, LoginPage } from "@/pages";
import { AppHeader } from "@/components/app-header/app-header";
import { ProtectedRoute } from "@/components/protected-route/protected-route";

export const Routers = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route exact={true} path="/">
          <MainPage />
        </Route>
        <ProtectedRoute exact={true} path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path="/logout">
          <ProfilePage />
        </ProtectedRoute>
        <Route exact={true} path="/login">
          <LoginPage />
        </Route>
        <Route exact={true} path="/registration">
          <LoginPage />
        </Route>
        <Route exact={true} path="/forgot-password">
          <LoginPage />
        </Route>
        <Route exact={true} path="/reset-password">
          <LoginPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};
