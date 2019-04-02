import React from 'react';

import * as Styled from './Styles';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = ({ingredients}) => {
  let receivedIngredients = Object.keys(ingredients)
    .map(ingKey => {
      return [...Array(ingredients[ingKey])].map((_, idx) => {
        console.log("ingKey + idx", ingKey, idx);
        return <BurgerIngredient key={ingKey + idx} type={ingKey} />
      });
    })
    .reduce((arr, elmt) => {
      return arr.concat(elmt)
    }, []);
  
  if (receivedIngredients.length === 0) {
    receivedIngredients = <h5>Please add some ingredients</h5>
  }
    console.log("receivedIngredients", receivedIngredients);
  return (
    <Styled.Burger>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {receivedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </Styled.Burger>
  );
};

export default burger;