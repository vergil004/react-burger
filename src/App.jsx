import React, {useState} from 'react';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import './App.css';
import ingredientsList from './utils/data.json'

function App (){

    const [ingredients, setIngredients] =useState(ingredientsList)

     return (
        <div className="App">
          <AppHeader/>
          <main className='pt-10 main'>
              <BurgerIngredients ingredients={ingredients}/>
              <BurgerConstructor ingredients={ingredients}/>
          </main>
        </div>
      )
}

export default App;
