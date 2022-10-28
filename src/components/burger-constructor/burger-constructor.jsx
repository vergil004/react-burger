import React from "react";
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import constructorStyles from './burger-constructor.module.css'

const ingredientsPropTypes = PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
    })

function BurgerConstructor (props) {
    // Пока выводится одна булка из списка ингредиентов и остальные ингредиенты в отдельном списке
    const bun = props.ingredients.find(item => item.type === 'bun')
    const goods = props.ingredients.filter(item => item.type !== 'bun')
    const total = props.ingredients.reduce((sum, item) => sum += item.price, 0)


    return(
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
                <Button htmlType='submit' type='primary' size="medium">
                    Оформить заказ
                </Button>
            </div>
        </form>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired
}

export default BurgerConstructor