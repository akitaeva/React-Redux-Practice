import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import * as Styled from './Styles';

const logo = ({height, ...props}) => (
    <Styled.LogoWrapper height={height} >
      <img src={burgerLogo} alt='BurgerBuider'/>
    </Styled.LogoWrapper>   
);


export default logo;