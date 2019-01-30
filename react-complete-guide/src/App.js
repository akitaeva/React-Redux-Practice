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

  switchNameHandler = (newName) => {
    this.setState({
      people: [
        {name: newName, age: 25},
        {name: "Jill", age: 24},
        {name: "Jane", age: 30}
      ]  
    })
  }

  nameInputHandler = (event) => {
    this.setState( {
      people: [
        {name: "Jack", age: 25},
        {name: "Jill", age: 24},
        {name: event.target.value, age: 29}
      ]
    })
  }

  render() {
     
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '2px solid lightblue',
      borderRadius: '5%',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style={style}
          onClick={()=> this.switchNameHandler("James!!")}>Name Switch</button>     {/* LESS EFFICIENT PERFORMANCE*/}
        <Person 
          name={this.state.people[0].name} 
          age={this.state.people[0].age}/>
        <Person 
          name={this.state.people[1].name} 
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, "Jake-Cake!")}> Hobbies: hiking </Person>  {/* MORE EFFICIENT PERFORMANCE**/}
        <Person 
          name={this.state.people[2].name} 
          age={this.state.people[2].age}
          changed={this.nameInputHandler} />
      </div>
    );
  }
}

export default App;
