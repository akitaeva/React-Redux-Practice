import React, {Component} from "react";

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/';
import SideDrawer from '../Navigation/SideDrawer';

import * as Styled from './Styles';

class Layout extends Component { 
  state = {
    showSideDrawer: false,
  }
  
  closeSideDrawerHandler = () => {
   this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    } );
  }

  render () {
    return (
    <Aux>
      <SideDrawer 
        open={this.state.showSideDrawer} 
        close={this.closeSideDrawerHandler}
      /> 
      <Toolbar 
        showDrawer={this.sideDrawerToggleHandler}/>
      <Styled.Content>
        {this.props.children}
      </Styled.Content>
    </Aux>
    );
  }
};

export default Layout;