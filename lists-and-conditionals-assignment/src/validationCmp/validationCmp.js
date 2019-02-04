import React from 'react';
import './ValidationCmp.css'

const validationCmp = (props) => {
  
    const length = props.length;
    let message = null;    

    if (length >= 8) {
        message = (
           <p className="greenLight">Text is long enough</p>
        )
    } else {
        message = (
        <p className="warning">Text is too short</p>
        )
    }

    return (
        <div className="validMsg">
            {message}
        </div>
    )
}

export default validationCmp;