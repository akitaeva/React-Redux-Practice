import React from 'react';

import * as Styled from './Styles';

const burgerIngredient = (props) => {
   let ingredient = null;

   switch (props.type) {
     case('bread-bottom'):
      ingredient = <Styled.BreadBottom></Styled.BreadBottom>;
      break;
     case('bread-top'):
      ingredient = (
        <Styled.BreadTop>
          <Styled.Seeds1></Styled.Seeds1>
          <Styled.Seeds2></Styled.Seeds2>
        </Styled.BreadTop>
      );
      break;
     case ('patty'):
      ingredient = <Styled.Patty></Styled.Patty>;
      break;
      case ('cheese'):
      ingredient = <Styled.Cheese></Styled.Cheese>;
      break;
     case ('greens'):
      ingredient = <Styled.Greens></Styled.Greens>;
      break;
     case ('mushroom'):
      ingredient = <Styled.Mushrooms></Styled.Mushrooms>;
      break;
     default:
      ingredient = null;
   }
   return ingredient;
};

export default burgerIngredient;