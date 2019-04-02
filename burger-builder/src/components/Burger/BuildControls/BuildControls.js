import React from 'react';

import * as Styled from './Styles';
import BuildCotrol from './BuildControl/BuildContol';

const controls = [
  { label: 'Tomato', type: 'tomato' },
  { label: 'Greens', type: 'greens' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Patty', type: 'patty' },
];

const buildCotrols = (props) => (
  <Styled.Controls>
    <div><h4>Current Price: <strong>{props.price.toFixed(2)}</strong></h4></div>
   {controls.map(ctrl => (
     <BuildCotrol 
        key={ctrl.label} 
        label={ctrl.label} 
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.key]}/>
   ))} 
  </Styled.Controls>
);

export default buildCotrols;