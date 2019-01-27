import React, { Component } from 'react';

import './Input.css';
class UserOutput extends Component {
    render(){
        return(
            <div className='outputComponent'>
                UserOutput
                <input value={this.props.name}></input>
            </div>
        );
    }
}

export default UserOutput;