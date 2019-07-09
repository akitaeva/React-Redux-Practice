import React from 'react';

import * as Styled from './Styles';

const navigationItem = (props) => (
  <Styled.NavItem>
    <a href={props.link}>
      {props.children}
    </a>
  </Styled.NavItem>
);

export default navigationItem;