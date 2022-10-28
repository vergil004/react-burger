import React from 'react';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import './App.css';
import ingredientsList from './utils/data.json'

class App extends React.Component{

    state = {
        ingredients:ingredientsList,
    }

    render() {
     return (
        <div className="App">
          <AppHeader/>
          <main className='pt-10 main'>
              <BurgerIngredients ingredients={this.state.ingredients}/>
              <BurgerConstructor ingredients={this.state.ingredients}/>
          </main>
        </div>
      )
    }


}

export default App;
