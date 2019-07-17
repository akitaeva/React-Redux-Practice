import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
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
    <p><strong>Total Price: {props.price}</strong></p>
    <p>Ready to Checkout?</p>
    <Button btnType='danger' clicked={props.purchaseAborted}>Cancel</Button>
    <Button btnType='success' clicked={props.purchaseOK}>Checkout</Button>
  </Aux>
  );
}



export default orderSummary;