import React from "react";

import * as Styled from './styles';

const drawerToggle = (props) => (
   <Styled.DrawerToggleWrapper onClick={props.clicked}>
     <div></div>
     <div></div>
     <div></div>
   </Styled.DrawerToggleWrapper>
);

export default drawerToggle;