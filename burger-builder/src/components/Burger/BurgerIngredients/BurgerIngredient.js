import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Styles';

class BurgerIngredient extends Component {
  render () {
    let ingredient = null;

    switch (this.props.type) {
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
      case ('tomato'):
       ingredient = <Styled.Tomato></Styled.Tomato>;
       break;
      case ('greens'):
       ingredient = <Styled.Greens></Styled.Greens>;
       break; 
      default:
       ingredient = null;
    }
    return ingredient;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired 
};

export default BurgerIngredient;