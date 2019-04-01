import React from 'react';

import * as Styled from './Styles';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {
  return (
    <Styled.Burger>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      <BurgerIngredient type="cheese"></BurgerIngredient>
      <BurgerIngredient type="patty"></BurgerIngredient>
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </Styled.Burger>
  );
};

export default burger;