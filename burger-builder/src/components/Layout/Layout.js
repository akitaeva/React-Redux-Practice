import React from "react";

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar'

import * as Styled from './Styles';

const layout = ( props ) => (

  <Aux>
   <Toolbar></Toolbar>
    <Styled.Content>
      {props.children}
    </Styled.Content>
  </Aux>

);

export default layout;