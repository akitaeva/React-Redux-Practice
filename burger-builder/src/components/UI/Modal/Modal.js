import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import * as Styled from './Styles';

class Modal extends Component { 
  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show;
  }

  render () {
    return (
      <Aux>
      <Backdrop show={this.props.show} clicked={this.props.closeModal}/>
      <Styled.ModalWrapper 
        style={{ 
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' :'0'}}>
            {this.props.children}
      </Styled.ModalWrapper>
    </Aux>
    )
  }
};

export default Modal;