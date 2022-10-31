import React, {useState} from 'react';
import {AppHeader} from "./components/app-header/app-header";
import {BurgerIngredients} from "./components/burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "./components/burger-constructor/burger-constructor";
import './App.css';

export function App (){

    const [state, setState] =useState({
        ingredients: [],
        isLoading: false,
        hasError: false
    })
    const ingredientsDataUrl = 'https://norma.nomoreparties.space/api/ingredients';

    const fetchData = async () => {
        await fetch(ingredientsDataUrl)
        .then(response => response.json())
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
          <main className='pt-10 main'>
              {state.ingredients.length > 0 &&<BurgerIngredients ingredients={state.ingredients}/>}
              {state.ingredients.length > 0 &&<BurgerConstructor ingredients={state.ingredients}/>}
          </main>
        </div>
      )
}

