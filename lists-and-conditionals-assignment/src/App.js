import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import ValidationCmp from './ValidationCmp/ValidationCmp';

class App extends Component {
  
  state = { 
    typed: "",
    theLength: 0
  }
  
 inputHandler = (event) => {

    this.setState( {
      typed: event.target.value,
      theLength: event.target.value.length
    })
  }
  
  render() {
    return (
      <div className="App">
       <h3>React assgnmt #2</h3>

      <div className="utilities">
      <UserOutput
        length={this.state.theLength}/>

      <ValidationCmp
        length={this.state.theLength}/>
      </div>


      <UserInput
        typed={this.state.typed}
        updated={this.inputHandler} />


      </div>
    );
  }
}

export default App;
