import React from 'react';
import './UserOutput.css'


const userOutput = (props) => {
    return (
        <div className="outputEntry">
            <p> Title is authored by <span className="author">{props.username}</span></p>
            <p> Banh mi readymade so 90's, occupy mumblecore with normcore tacos,
                gastropub loko artisan. Single-origin coffee. Try-hard tumeric and 
                farm-to-table. Lyft ramps with raw denim, asymmetrical 8-bit, 
                YOLO aesthetic fixie.</p>
        </div>
    )
}

export default userOutput;