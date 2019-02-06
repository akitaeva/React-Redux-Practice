import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import ValidationCmp from './ValidationCmp/ValidationCmp';
import CharCmp from './CharCmp/CharCmp';

class App extends Component {
  
  state = { 
    typed: "",
    theLength: 0,
    letters: []
  }
  
 inputHandler = (event) => {

    this.setState( {
      typed: event.target.value,
      theLength: event.target.value.length,
      letters: event.target.value.split("")
    })
 
  }

  deleteCharHadler = (charIndex)  => {
    const charArr = this.state.letters
    charArr.splice(charIndex, 1);
    this.setState ( {
      letters: charArr,
      typed: charArr.join(''),
      theLength: charArr.length,
    })
 }

 
 
  render() { 

    let theLetters = null;

 console.log("this.state.letters", this.state.letters)

    if (this.state.letters) {
      theLetters = (
        <div>
          {this.state.letters.map((letter, index) => {
            return <CharCmp
            click = {() => this.deleteCharHadler(index)}
            oneChar = {letter}
            key = {index} />
          })}
        </div>
      )
    }


    return (
      <div className="App">
       <h3>React assgnmt #2</h3>

      <div className="utilities">
      <UserOutput
        length={this.state.theLength}/>

      {theLetters}

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
