import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: "capitalize"}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li> );
    })
    
  return (
  <Aux>
    <h3>Your Order</h3>
    <p>an AwEsOMe burger with the following ingredients:</p>
    <ul>
       {ingredientSummary}
    </ul>
    <p>Ready to Checkout?</p>
    <Button styled='danger'>Cancel</Button>
    <Button styled='success'>Checkout</Button>
  </Aux>
  );
}



export default orderSummary;