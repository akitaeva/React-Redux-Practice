import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput'

class App extends Component {
  
  state = {
    authors: [
      {username: "coolBoy55"},
      {username: "jimbeam"},
      {username: "potatoHead"},
    ]   
  }
  
  nameInputHandler = (event) => {
    this.setState( {
      authors: [
        {username: event.target.value},
        {username: "jimbeam"},
        {username: "potatoHead"},
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
       <h3>React assgnmt #1</h3>
       <UserInput
        username={this.state.authors[0].username}
        updated={this.nameInputHandler} />
       <UserOutput
        username={this.state.authors[0].username}/>
       <UserOutput
        username={this.state.authors[1].username}/>
       <UserOutput
        username={this.state.authors[2].username}/>
      </div>
    );
  }
}

export default App;
