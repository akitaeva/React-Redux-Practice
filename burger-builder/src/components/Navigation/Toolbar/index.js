import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems';
import * as Styled from './Styles';


const toolbar = () => (
  <Styled.ToolbarWrapper>
    <div>MENU</div>
    <Logo height="75" />
    <Styled.NavWrapper>
       <NavigationItems />
    </Styled.NavWrapper>
  </Styled.ToolbarWrapper>
);

export default toolbar;