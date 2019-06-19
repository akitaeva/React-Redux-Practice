import React from 'react';

import * as Styled from './Styles';

const button = ({clicked, styled, ...props}) => (
  <Styled.Button onClick={clicked} styled={styled}> 
    {props.children}
  </Styled.Button>
);


export default button;