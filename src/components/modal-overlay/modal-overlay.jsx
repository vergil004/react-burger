import React from "react";
import PropTypes from "prop-types";
import modalOverlayStyles from './modal-overlay.module.css'

export const ModalOverlay = ({children, closeModal}) =>{
    const keyPressHandler = ({key}) =>{
        switch (key){
            case 'Escape':
                closeModal()
                break;
            default:
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', keyPressHandler);
        return () => window.removeEventListener('keydown', keyPressHandler)
    },[])

    return(
        <div className={modalOverlayStyles.modalOverlay} onClick={() => closeModal()}>{children}</div>
    )
}

ModalOverlay.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}
