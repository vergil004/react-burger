import React from "react";
import detailsStyles from './ingredient-details.module.css'

export function IngredientDetails ({ingredient}){
    return(
        <div className={detailsStyles.details}>
            <img src={ingredient.image_large}/>
            <h2 className={`${detailsStyles.details__title}pt-4 pb-8 text text_type_main-medium`}>{ingredient.name}</h2>
            <ul className={detailsStyles.details__grid}>
                <li className={detailsStyles.details__item}>
                    <div className='text_type_main-default'>Калории,ккал</div>
                    <div className='text_type_main-default pt-4'>{ingredient.calories}</div>
                </li>
                <li className={detailsStyles.details__item}>
                    <div className='text_type_main-default'>Белки, г</div>
                    <div className='text_type_main-default pt-4'>{ingredient.proteins}</div>
                </li>
                <li className={detailsStyles.details__item}>
                    <div className='text_type_main-default'>Жиры, г</div>
                    <div className='text_type_main-default pt-4'>{ingredient.fat}</div>
                </li>
                <li className={detailsStyles.details__item}>
                    <div className='text_type_main-default'>Углеводы, г</div>
                    <div className='text_type_main-default pt-4'>{ingredient.carbohydrates}</div>
                </li>
            </ul>
        </div>
    )
}