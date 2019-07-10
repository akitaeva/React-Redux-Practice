import React from 'react';

import Logo from '../../Logo/Logo';
import * as Styled from './Styles';


const toolbar = () => (
  <Styled.ToolbarWrapper>
    <div>MENU</div>
    <Logo/>
    <Styled.NavWrapper>
      ...
    </Styled.NavWrapper>
  </Styled.ToolbarWrapper>
);

export default toolbar;