import React, { useCallback, FC } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { userLogout } from "@/services/actions/user";
import logoutStyles from "./logout.module.css";

type TLogout = {
  resetLogout: () => void;
};

export const Logout: FC<TLogout> = ({ resetLogout }) => {
  const useAppDispatch: () => any = useDispatch;
  const dispatch = useAppDispatch();
  const onSubmitHandler = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(userLogout());
    },
    [dispatch]
  );
  const onCancelHandler = useCallback(
    (e: React.FormEvent) => {
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
