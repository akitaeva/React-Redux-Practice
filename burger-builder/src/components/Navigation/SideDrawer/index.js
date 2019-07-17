import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems'; 
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import * as Styled from './Styles';


const sideDrawer = ({ open, close }) => {
  let transform = 'translateX(-100%)';
  if (open) { transform = 'translateX(0)'}

  return (
    <Aux>
      <Backdrop show={open} clicked={close}/>
      <Styled.SideDraweWrapper transform={transform}>
        <Logo height="6"/>
        <nav>
          <NavigationItems />
        </nav>
      </Styled.SideDraweWrapper>
    </Aux>
  );
};

export default sideDrawer;