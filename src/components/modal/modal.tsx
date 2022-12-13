import React, { useEffect, FC, KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "@/components/modal-overlay/modal-overlay";
import modalStyles from "./modal.module.css";

const modalRoot = document.getElementById("modal") as HTMLElement;

type TModal = {
  closeModal: () => void;
  title?: string;
  children: React.ReactNode;
};

export const Modal: FC<TModal> = ({ closeModal, title, children }) => {
  useEffect(() => {
    const keyPressHandler = (event: KeyboardEvent): any => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    // @ts-ignore
    document.addEventListener("keydown", keyPressHandler);
    // @ts-ignore
    return () => document.removeEventListener("keydown", keyPressHandler);
  }, [closeModal]);

  return createPortal(
    <div className={modalStyles.modal__box}>
      <ModalOverlay closeModal={() => closeModal()} />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${modalStyles.modal} pt-10 pr-10 pb-15 pl-10`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={modalStyles.modal__header}>
          <div className="text text_type_main-large">{title}</div>
          <button
            className={modalStyles.modal__close}
            onClick={() => closeModal()}
          >
            <CloseIcon type="primary" />
          </button>
        </div>
        <div className={modalStyles.modal__content}>{children}</div>
      </motion.div>
    </div>,
    modalRoot
  );
};

Modal.defaultProps = {
  title: "",
};
