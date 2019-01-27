import React,{Component} from 'react';
import Family from '../Family/Family'
import './Person.css'

class PersonClass extends Component{
    render(){
        return (<div>
            <p>{this.props.children}</p>
            <Family class='person'>sdfesd</Family>
            <Family class='person'>dsg</Family>
        </div>);
    }
}

export default PersonClass;