import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
        <Layout>
          <h3 style={{ textAlign: 'center'}}>Build Your Burger Here:</h3>
          <BurgerBuilder>
            
          </BurgerBuilder>
        </Layout>
    );
  }
}

export default App;
