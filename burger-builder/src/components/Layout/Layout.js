import React, {Component} from "react";

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/';
import SideDrawer from '../Navigation/SideDrawer';

import * as Styled from './Styles';

class Layout extends Component { 
  state = {
    showSideDrawer: true
  }
  
  sideDrawerHandler = () => {
   this.setState({showSideDrawer: false})
  }
  render () {
    return (
    <Aux>
      <SideDrawer 
        open={this.state.showSideDrawer} 
        closed={this.sideDrawerHandler}
      /> 
      <Toolbar />
      <Styled.Content>
        {this.props.children}
      </Styled.Content>
    </Aux>
    );
  }
};

export default Layout;