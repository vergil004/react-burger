import React, { FC } from "react";
import modalOverlayStyles from "./modal-overlay.module.css";

type TOverlay = {
  closeModal: () => void;
};

export const ModalOverlay: FC<TOverlay> = ({ closeModal }) => {
  return (
    <div
      className={modalOverlayStyles.modalOverlay}
      onClick={() => closeModal()}
    />
  );
};
