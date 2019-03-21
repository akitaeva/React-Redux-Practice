import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux'
import styles from './Person.module.css';
import "./Person.css";


class Person extends Component {
  constructor (props) {
     super(props);
     this.inputElementRef = React.createRef();
  }


  componentDidMount() {
     //this.inputElement.focus();
     this.inputElementRef.current.focus();
  }

     render () {
        console.log('[Person.js] rendering...'); 
        return (
            <Aux>
            <div className={styles.Person}>
                <p onClick={this.props.click}> 
                  I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="bn6">{this.props.children}</p>
                <input 
                   key="kl3"
                   //ref={(inputEl) => {this.inputElement = inputEl}}
                   ref={this.inputElementRef}
                   type="text" 
                   onChange={this.props.changed} 
                   value={this.props.name} />
            </div>
            </Aux>
            );
         }
}


//In dev mode would give warning when wrong types of args are passed
Person.propTypes = {
    click: PropTypes.func,
     name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;