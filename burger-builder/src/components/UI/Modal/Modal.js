import React from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import * as Styled from './Styles';

const modal = ({show, closeModal, ...props}) => (
  <Aux>
    <Backdrop show={show} clicked={closeModal}/>
    <Styled.ModalWrapper 
      style={{ 
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' :'0'}}>
          {props.children}
    </Styled.ModalWrapper>
  </Aux>
);

export default modal;