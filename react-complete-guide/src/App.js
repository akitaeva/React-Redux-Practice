import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      {name: "Jack", age: 25},
      {name: "Jill", age: 24},
      {name: "Jane", age: 29}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      people: [
        {name: "James", age: 25},
        {name: "Jill", age: 24},
        {name: "Jane", age: 30}
      ]  
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler}>Name Switch</button>
        <Person 
          name={this.state.people[0].name} 
          age={this.state.people[0].age}/>
        <Person 
          name={this.state.people[1].name} 
          age={this.state.people[1].age}
          click={this.switchNameHandler}> Hobbies: hiking </Person>
        <Person 
          name={this.state.people[2].name} 
          age={this.state.people[2].age}/>
      </div>
    );
  }
}

export default App;
