import React from 'react';
import './CharCmp.css'


const charCmp = (props) => {


    return (
        <div className="letterSquare" onClick={props.click}>
           <h3>{props.oneChar}</h3>
        </div>
    )
}

export default charCmp;