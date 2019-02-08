import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

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

nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    const onePerson = {
       ...this.state.people[personIndex]
    }; 


    //======== ALT APPROACH =========== :
    //const onePerson = Object.assign({}, this.state.people[personIndex]);
    

    onePerson.name = event.target.value;

    const peopleToo = [...this.state.people];
    peopleToo[personIndex] = onePerson;
    
    this.setState( {people: peopleToo })
  }


  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople : !doesShow})
  }

  render() {
     
    const style = {
      backgroundColor: "green",
      color: "white",
      font: 'inherit',
      border: '2px solid lightblue',
      borderRadius: '5%',
      padding: '8px',
      cursor: 'pointer',
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      }
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
              key = {person.id}
              changed = { (event)=> this.nameChangeHandler(event, person.id)}/>
          })}
        </div> 
      );
      style.backgroundColor ="red";
      style[":hover"] = {
        backgroundColor: "pink",
        color: "black",
      }
    }

   let classes = [];
   if (this.state.people.length <= 2) {
     classes.push('red');
   }
   if (this.state.people.length <= 1) {
    classes.push('bold');
  }


    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is the dynamic style!</p>
        <button 
          style={style}
          onClick={this.togglePeopleHandler}>Toggle People</button>     {/* LESS EFFICIENT PERFORMANCE*/}
          {thePeople}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
