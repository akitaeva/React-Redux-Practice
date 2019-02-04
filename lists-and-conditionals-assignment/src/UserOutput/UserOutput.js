import React from 'react';
import './UserOutput.css'


const userOutput = (props) => {
    const length = props.length;



    return (
        <div className="outputEntry">
           
        <p>You've entered <span className="enlarge">{length}</span> letters.</p>


        </div>
    )
}

export default userOutput;