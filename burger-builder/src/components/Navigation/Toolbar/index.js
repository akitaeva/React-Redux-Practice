import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import * as Styled from './Styles';


const toolbar = ({ showDrawer }) => (
  <Styled.ToolbarWrapper>
    <DrawerToggle clicked={showDrawer}/>
    <Logo height="75" />
    <Styled.NavWrapper>
       <NavigationItems />
    </Styled.NavWrapper>
  </Styled.ToolbarWrapper>
);

export default toolbar;