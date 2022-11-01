import React from "react";
import PropTypes from "prop-types";
import modalOverlayStyles from './modal-overlay.module.css'

export const ModalOverlay = ({children, closeModal}) =>{

    return(
        <div className={modalOverlayStyles.modalOverlay} onClick={() => closeModal()}>{children}</div>
    )
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}
