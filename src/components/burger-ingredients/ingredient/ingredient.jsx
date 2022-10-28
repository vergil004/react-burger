import React, {useState} from "react";
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientStyle from './ingredient.module.css'

function Ingredient(props){
    const [count, setCount] = useState(0)

    return (
        <div className={`${ingredientStyle.ingredient} pr-4 pl-4`} onClick={() => setCount(count + 1)}>
            {count > 0 &&
                <div className={ingredientStyle.ingredient__count} >
                    <Counter count={count}/>
                </div>
            }
            <img className={ingredientStyle.ingredient__image} src={props.ingredient.image_large} alt={props} />
            <div className={`${ingredientStyle.ingredient__price} pt-1 pb-1`}>
                <span className="text text_type_digits-default pr-2">{props.ingredient.price}</span>
                <CurrencyIcon type={"primary"}/>
            </div>
            <div className={`${ingredientStyle.ingredient__name} text text_type_main-default`}>{props.ingredient.name}</div>
        </div>
    )
}

Ingredient.defaultProps = {
    ingredient: {},
}

export default Ingredient
