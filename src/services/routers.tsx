import React from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import {
  MainPage,
  NotFoundPage,
  ProfilePage,
  LoginPage,
  IngredientPage,
  FeedPage,
  FeedIdPage,
} from "@/pages";
import { AppHeader } from "@/components/app-header/app-header";
import { ProtectedRoute } from "@/components/protected-route/protected-route";
import { Modal } from "@/components/modal/modal";
import { IngredientDetails } from "@/components/ingredient-details/ingredient-details";
import { FeedDetails } from "@/components/feed-details/feed-details";

export const Routers = () => {
  const location = useLocation<any>();
  const history = useHistory();
  const background = location.state && location.state.background;
  const handleModalClose = () => {
    history.goBack();
  };
  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route exact={true} path="/">
          <MainPage />
        </Route>
        <Route exact={true} path="/ingredients/:ingredientId">
          <IngredientPage />
        </Route>
        <ProtectedRoute exact={true} path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute exact={true} path="/profile/orders">
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
        <Route exact={true} path="/feed/:id">
          <FeedIdPage />
        </Route>
        <Route exact={true} path="/feed/">
          <FeedPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

      {background && (
        <div>
          <Route
            path="/ingredients/:ingredientId"
            children={
              <Modal closeModal={handleModalClose} title="Детали ингредиента">
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            children={
              <Modal closeModal={handleModalClose}>
                <FeedDetails />
              </Modal>
            }
          />
        </div>
      )}
    </>
  );
};
