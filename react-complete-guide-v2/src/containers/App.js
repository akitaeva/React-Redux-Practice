import React, { Component } from 'react';
import classes from './App.module.css';
import './App.css';
// import Person from '../components/People/Person/Person';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let thePeople = null;
 

    if (this.state.showPeople) {
      thePeople = <People
          people = {this.state.people}
          clicked = {this.deletePersonHnadler}
          changed = {this.nameChangeHandler} />

    }

    return (

      <div className={classes.App}>
           <Cockpit 
           showPeople = {this.state.showPeople}
           people = {this.state.people} 
           clicked = {this.togglePeopleHandler}/>
          {thePeople}
      </div>

    );
  }
}

export default App;
