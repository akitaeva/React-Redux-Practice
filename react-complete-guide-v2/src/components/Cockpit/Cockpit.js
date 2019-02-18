import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = props => {


//   useEffect(() => {                    //   componentDidMount & componentDidUpdate in 1   
//     console.log("[Cockpit.js] useEffect"); 
//   // "http" request
//     const timer = setTimeout(() => {
//         alert("Saved data to the cloud!");
//     }, 500);
//     //doesn't have to have a RETURN
//     //if it does, it would be a function that executes before the main useEffect() runs,
//     //but AFTER the (first) render cycle
//     return () => {
//         clearTimeout(timer);
//         console.log("[Cockpit.js] cleanup work in useEffect");  
//     }; 
//       // [] - empty array allows for the one time execution on load
//       // [props.persons] - a true array => the field lets control the execution of useEffect method
//   }, []);  

  
  
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

export default React.memo(cockpit);