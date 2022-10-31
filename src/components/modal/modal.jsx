import React from "react";
import ReactDOM from 'react-dom';
import { CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import modalStyles from './modal.module.css'


const modalRoot = document.getElementById("modal");

export function  Modal({closeModal, title, ingredient}){
    const keyPressHandler = ({key}) =>{
        console.log(closeModal)
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

    return ReactDOM.createPortal(
        <div className={modalStyles.modal__overlay} onClick={() => closeModal()}>
            <div className={`${modalStyles.modal} pt-10 pr-10 pb-15 pl-10`} onClick={e => e.stopPropagation()}>
                <div className={modalStyles.modal__header}>
                    <div className="text text_type_main-large">{title}</div>
                    <button className={modalStyles.modal__close}  onClick={() => closeModal()}>
                        <CloseIcon type='primary'/>
                    </button>
                </div>
                <div className={modalStyles.modal__content}>
                    <IngredientDetails ingredient={ingredient}/>
                </div>
            </div>
        </div>, modalRoot
    )
}