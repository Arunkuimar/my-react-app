import React,{ Component } from 'react';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

import './Practise.css'

class Practise extends Component {
    state={
       name:['Arun','Kuimar']
    }
    handleChangeEvent=(event)=>{
        
        var a=event.target.value;
    this.setState({
        name:event.target.value.split(' ')
    });
    }
render(){
   return (
    //    <div className='outerDiv'>
       <div className='practise'>
        <UserInput changeEvent={this.handleChangeEvent}></UserInput>
        <UserOutput name={this.state.name[0]}></UserOutput>
        <UserOutput name={this.state.name[1]}></UserOutput>
    {/* </div> */}
    </div>);
}
}

export default Practise;