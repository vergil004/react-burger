import React, {useState} from "react";
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import {Modal} from '../modal/modal'
import { OrderDetails } from '../order-details/order-details'
import constructorStyles from './burger-constructor.module.css'
import {ingredientPropTypes} from '../../utils/types'

export function BurgerConstructor ({ingredients}) {
    // Пока выводится одна булка из списка ингредиентов и остальные ингредиенты в отдельном списке
    const bun = ingredients.find(item => item.type === 'bun')
    const goods = ingredients.filter(item => item.type !== 'bun')
    const total = ingredients.reduce((sum, item) => sum += item.price, 0)

    const [showModal, setShowModal] = useState(false)

    const handleSubmit = () => {
        setShowModal(true)
    }

    return(
        <>
            {showModal &&
                <Modal closeModal={() => setShowModal(false)}>
                    <OrderDetails />
                </Modal>
            }
            <form className={`${constructorStyles.burgerConstructor} pt-15 pl-4`}>
                <div className="pl-8">
                    <ConstructorElement type='top' isLocked={true} price={bun.price} text={bun.name} thumbnail={bun.image}/>
                </div>
                <ul className={`${constructorStyles.burgerConstructor__list} pt-4 pb-4`}>
                    {
                        goods.map((item, index) => (
                            <li key={index}>
                                <div className="pr-2"><DragIcon type="primary"/></div>
                                <ConstructorElement isLocked={false} price={item.price} text={item.name} thumbnail={item.image}/>
                            </li>
                        ))
                    }
                </ul>
                <div className="pl-8">
                    <ConstructorElement type='bottom' isLocked={true} price={bun.price} text={bun.name} thumbnail={bun.image}/>
                </div>
                <div className={`${constructorStyles.burgerConstructor__total} pt-10 pr-3`}>
                    <div className={`${constructorStyles.burgerConstructor__sum} pr-10`}>
                        <div className='pr-2 text text_type_digits-medium'>
                            {total}
                        </div>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <Button htmlType='button' type='primary' size="medium" onClick={handleSubmit}>
                        Оформить заказ
                    </Button>
                </div>
            </form>
        </>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}
