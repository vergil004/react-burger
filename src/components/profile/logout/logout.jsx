import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { userLogout } from "@/services/actions/user";
import logoutStyles from "./logout.module.css";

export const Logout = ({ resetLogout }) => {
  const dispatch = useDispatch();
  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(userLogout());
    },
    [dispatch]
  );
  const onCancelHandler = useCallback(
    (e) => {
      e.preventDefault();
      resetLogout();
    },
    [resetLogout]
  );
  return (
    <form
      className={logoutStyles.logout}
      onSubmit={onSubmitHandler}
      onReset={onCancelHandler}
    >
      <div className={`${logoutStyles.logout__bottom} pt-10`}>
        <Button type={"secondary"} htmlType="reset">
          Отмена
        </Button>
        <Button htmlType="submit">Выйти</Button>
      </div>
    </form>
  );
};

Logout.propTypes = {
  resetLogout: PropTypes.func.isRequired,
};
