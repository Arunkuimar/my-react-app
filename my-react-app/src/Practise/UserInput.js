import React, { Component } from 'react';

import './Input.css';

class UserInput extends Component {

    changeEvent=()=>{
        console.log('Inside User Input');
    }
    render(){
        return(
            <div className='inputComponent'>
                UserName
                <input type='text' onChange={this.props.changeEvent}> 
                </input>
            </div>
        );
    }
}

export default UserInput;