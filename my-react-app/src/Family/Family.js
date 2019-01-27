import React,{Component} from 'react'

class Family extends Component{
    render(){
        return (<div>
            <p>{this.props.children}HOII</p>
        </div>);

    }
} 

export default Family;