import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems'; 
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import * as Styled from './Styles';


const sideDrawer = props => {
  let visibility = 'translateX(-100%)';
  if (props.open) { visibility = 'translateX(0)'}

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <Styled.SideDraweWrapper visibility={visibility}>
        <Logo height="6"/>
        <nav>
          <NavigationItems />
        </nav>
      </Styled.SideDraweWrapper>
    </Aux>
  );
};

export default sideDrawer;