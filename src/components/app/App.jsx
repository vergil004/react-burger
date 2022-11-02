import React, {useState} from 'react';
import {AppHeader} from "../app-header/app-header";
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import appStyles from'./app.module.css';

const ingredientsDataUrl = 'https://norma.nomoreparties.space/api/ingredients';

export function App (){

    const [state, setState] =useState({
        ingredients: [],
        isLoading: false,
        hasError: false
    })

        const checkResponse = (res) => {
            console.log(res.json())
          return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    };

    const fetchData = async () => {
        await fetch(ingredientsDataUrl)
        .then(response => checkResponse(response))
        .then(data => setState({...state, ingredients: data.data, isLoading: false}))
        .catch(setState({...state, isLoading: false, hasError: true}))
    }

    React.useEffect(() => {
        setState({...state, isLoading: true})
        fetchData()
    },[])

     return (
        <div className="App">
          <AppHeader/>
          <main className={`pt-10 ${appStyles.main}`}>
              {state.ingredients.length > 0 &&<BurgerIngredients ingredients={state.ingredients}/>}
              {state.ingredients.length > 0 &&<BurgerConstructor ingredients={state.ingredients}/>}
          </main>
        </div>
      )
}

