import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  greens: 0.75,
  cheese: 1,
  patty: 2,
  tomato: 0.50,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      tomato: 0,
      cheese: 0,
      patty: 0,
      greens: 0,
    },
    totalPrice: 5,
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updIngredients = {
      ...this.state.ingredients
    };
    updIngredients[type] = updatedCount;
    const addedAmount = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + addedAmount;
    this.setState({
      totalPrice: newPrice,
      ingredients: updIngredients,
    })
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) { return }
    const updatedCount = oldCount - 1;
    const updIngredients = {
      ...this.state.ingredients
    };
    updIngredients[type] = updatedCount;
    const removedAmount = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - removedAmount;
    this.setState({
      totalPrice: newPrice,
      ingredients: updIngredients,
    })
  }
  
  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={ disabledInfo } />
      </Aux>
    )
  }
}

export default BurgerBuilder;