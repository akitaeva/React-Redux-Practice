import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(() => {                    //   componentDidMount & componentDidUpdate in 1   
        console.log("[Cockpit.js] useEffect")  
  // "http" request
    setTimeout(()=> {
        alert("Saved data to the cloud!");
    }, 500);
      // [] - empty array allows for the one time exxecution on load
  }, [props.persons]);  // a true array -> field lets control the execution 
  
let assignedClasses = [];
let btnClass='';

if (props.showPeople){
    btnClass = classes.Red;
}

if (props.people.length <= 2) {
    assignedClasses.push(classes.red);
}
if (props.people.length <= 1) {
    assignedClasses.push(classes.bold);
}
 

return (
        <div className= {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is the dynamic style!</p>
            <button 
            className = {btnClass}
            onClick={props.clicked}>Toggle People</button>    
        </div>
    );
};

export default cockpit;