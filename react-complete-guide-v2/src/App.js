import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { id: "ckj92nds", name: "Jack", age: 25},
      { id: "vnfslk3d", name: "Jill", age: 24},
      { id: "nsjse83c", name: "Jane", age: 29}
    ],
    showPeople: false,
  }

deletePersonHnadler = (personIndex)  => {
   const people2 = this.state.people.slice();
   people2.splice(personIndex, 1);
   this.setState({people: people2})
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


  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople : !doesShow})
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

    let thePeople = null;

    if (this.state.showPeople) {
      thePeople = (
        <div>
          {this.state.people.map((person, index) => {
              return <Person 
              click = {() => this.deletePersonHnadler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}/>
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style={style}
          onClick={this.togglePeopleHandler}>Toggle People</button>     {/* LESS EFFICIENT PERFORMANCE*/}
          {thePeople}
      </div>
    );
  }
}

export default App;
