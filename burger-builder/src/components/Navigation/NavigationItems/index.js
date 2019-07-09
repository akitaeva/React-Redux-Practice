import React from 'react';

import * as Styled from './Styles';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
  <Styled.navItemsWrapper>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </Styled.navItemsWrapper>
);

export default navigationItems;