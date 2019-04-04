import React from 'react';

import * as Styled from './Styles';

const modal = (props) => (
  <Styled.ModalWrapper>
    {props.children}
  </Styled.ModalWrapper>
);

export default modal;