import React, {useEffect, useRef} from 'react';

import AuthContext from '../../context/auth-context';

import classes from './Cockpit.css';

const cockpit =  props => {
   const toggleBtnRef = useRef(null);



    useEffect(() => {                    //   componentDidMount & componentDidUpdate in 1   
        console.log("[Cockpit.js] useEffect"); 
    // "http" request
        const timer = setTimeout(() => {
            alert("Saved data to the cloud!");
        }, 500);
        //doesn't have to have a RETURN
        //if it does, it would be a function that executes before the main useEffect() runs,
        //but AFTER the (first) render cycle
        toggleBtnRef.current.click();
        return () => {
            clearTimeout(timer);
            console.log("[Cockpit.js] cleanup work in useEffect");  
        }; 
        // [] - empty array allows for the one time execution on load
        // [props.persons] - a true array => the field lets control the execution of useEffect method
    }, []);  

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect"); 
        return () => {
          console.log("[Cockpit.js] cleanup work in 2nd useEffect")
        };
    });
    
    let assignedClasses = [];
    let btnClass='';

    if (props.showPeople){
        btnClass = classes.Red;
    }

    if (props.peopleLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.peopleLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    

    return (
            <div className= {classes.Cockpit}>
                <h1>{props.title}</h1>
                <p className={assignedClasses.join(' ')}>This is the dynamic style!</p>
                <button 
                ref={toggleBtnRef}
                className = {btnClass}
                onClick={props.clicked}>Toggle People</button>
                <AuthContext.Consumer>
                 {context => <button onCLick={context.login}>Log in</button>} 
                </AuthContext.Consumer>     

            </div>
        );
};

    export default React.memo(cockpit);