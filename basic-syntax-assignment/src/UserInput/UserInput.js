import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="inputEntry">
            <input type="text" onChange={props.updated} value={props.username}/>
        </div>
    )
}

export default userInput;