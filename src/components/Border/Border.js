import React from 'react';
import './Border.css';

const Border = (props) => {
    return (
        <div id="border">
          (<h3 id='project' className = 'int title' style = {{color:'white'}}>{props.title ? props.title : undefined}</h3>)
          
        </div>
        
    )
}

export default Border;