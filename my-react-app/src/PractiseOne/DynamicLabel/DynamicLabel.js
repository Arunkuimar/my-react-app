import React,{Component} from 'react';

import LabelComponent from '../LabelComponent/LabelComponent'
class DynamicLabel extends Component {
    render(){
        console.log(this.props.labelName);
        console.log(Array.from(this.props.labelName));
        return (<div>
            
            {Array.from(this.props.labelName).map(label=>
            <LabelComponent >{label}</LabelComponent>)}
        </div>);
    }
}

export default DynamicLabel;