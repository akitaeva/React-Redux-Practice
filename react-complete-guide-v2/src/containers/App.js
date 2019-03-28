import React, { Component } from 'react';
import classes from './App.module.css';
import './App.css';
// import Person from '../components/People/Person/Person';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
constructor(props) {
  super(props);
  console.log('[App.js constructor');
}


  state = {
    people: [
      { id: "ckj92nds", name: "Jack", age: 25},
      { id: "vnfslk3d", name: "Jill", age: 24},
      { id: "nsjse83c", name: "Jane", age: 29}
    ],
    showPeople: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

static getDerivedStateFromProps(props, state) {
  console.log('[App.js] getDerivedStateFromProps: ', props);
  return state;
}

componentDidMount() {
  console.log('[App.js] componentDidMount');
}

shouldComponentUpdate(nextProps, nextState) {
  console.log("[App.js] shouldComponentUpdate");
  return true;
}

componentDidUpdate(prevProps, prevState, snapshot){
  console.log('[App.js] componentDidUpdate');
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
    

//the best practice for the state updates that depend on the old state    
    this.setState( (prevState, props) => {
      return {
        people: peopleToo,
        changeCounter: prevState.changeCounter + 1,  
       } 
      })
    };


  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople : !doesShow})
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render'); 
    let thePeople = null;
 

    if (this.state.showPeople) {
      thePeople = <People
          people = {this.state.people}
          clicked = {this.deletePersonHnadler}
          changed = {this.nameChangeHandler} 
          isAuthenticated = {this.loginHandler} 
          />
    }

    return (

      <WithClass classes={classes.App}>
       <button 
         onClick={() => {
           this.setState({ showCockpit: false}); 
        }}>
          REMOVE COCKPIT
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler}}
        >
       {this.state.showCockpit ? (
           <Cockpit 
           title = {this.props.appTitle}
           showPeople = {this.state.showPeople}
           peopleLength = {this.state.people.length} 
           clicked = {this.togglePeopleHandler}
           />
           ): null }
          {thePeople}
          </AuthContext.Provider>
      </WithClass>

    );
  }
}

export default App;
