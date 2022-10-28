import React from 'react';
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import ingredientsList from './utils/data.json'
import './App.css';


class App extends React.Component{

    state = {
        ingredients:ingredientsList,
    }

    render() {
     return (
        <div className="App">
          <AppHeader/>
          <div className='pt-10 main'>
              <BurgerIngredients ingredients={this.state.ingredients}/>
          </div>
        </div>
      )
    }


}

export default App;
