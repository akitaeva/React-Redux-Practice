import React from "react";

import Aux from '../../hoc/Aux';

import * as Styled from './Styles';

const layout = ( props ) => (

  <Aux>
    <div> Toolbar, SideDrawer, Backdrop</div>
    <Styled.Content>
      {props.children}
    </Styled.Content>
  </Aux>

);

export default layout;