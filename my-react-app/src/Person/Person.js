import React from 'react'; 
import './Person.css'
const person = (prop)=>{
    return (<div> 
<h2 class ='person'>{prop.name}</h2>
    </div>);
}

export default person;