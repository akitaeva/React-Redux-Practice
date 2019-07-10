import React from 'react';

import * as Styled from './Styles';

const button = ({clicked, btnType, ...props}) =>  (
  <Styled.Button onClick={clicked} btnType={btnType}> 
  {props.children}
</Styled.Button>
);


export default button;