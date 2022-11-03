import React from "react";
import PropTypes from "prop-types";
import modalOverlayStyles from './modal-overlay.module.css'

export const ModalOverlay = ({ closeModal}) =>{

    return(
        <div className={modalOverlayStyles.modalOverlay} onClick={() => closeModal()}/>
    )
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired,
}
