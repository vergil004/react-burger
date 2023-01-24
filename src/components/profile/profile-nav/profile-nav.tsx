import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "../../modal/modal";
import { Logout } from "../logout/logout";
import profileNavStyles from "./profile-nav.module.css";

export const ProfileNav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={profileNavStyles.profileNav}>
        <NavLink
          activeClassName={profileNavStyles.profileNav__itemActive}
          className={profileNavStyles.profileNav__item}
          exact
          to="/profile/"
        >
          Профиль
        </NavLink>
        <NavLink
          activeClassName={profileNavStyles.profileNav__itemActive}
          className={profileNavStyles.profileNav__item}
          exact
          to="/profile/orders"
        >
          История заказов
        </NavLink>
        <div
          className={profileNavStyles.profileNav__item}
          onClick={() => setShowModal(true)}
        >
          Выход
        </div>
        <div className="pt-20 text text_type_main-default">
          В этом разделе вы можете
          <br /> изменить свои персональные данные
        </div>
        {showModal && (
          <Modal
            title="Вы уверены что хотите выйти?"
            closeModal={() => setShowModal(false)}
          >
            <Logout resetLogout={() => setShowModal(false)} />
          </Modal>
        )}
      </div>
    </>
  );
};
