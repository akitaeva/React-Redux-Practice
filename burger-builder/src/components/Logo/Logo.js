import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import * as Styled from './Styles';

const logo = () => (
    <Styled.LogoWrapper>
      <img src={burgerLogo} alt='BurgerBuider'/>
    </Styled.LogoWrapper>   
);


export default logo;