import React from 'react';
import './ValidationCmp.css'

const validationCmp = (props) => {
  
    const length = props.length;
    let message = null;    

    // var node = React.findDOMNode(this.message);
    // node.classList.toggle('warning');

    if (length >= 8) {
        message = (
           <p className="userFeedback">Text is long enough</p>
        )
    } else {
        message = (
        <p className="userFeedback">Text is too short</p>
        )
    }

    return (
        <div className="validMsg warning">
            {message}
        </div>
    )
}

export default validationCmp;