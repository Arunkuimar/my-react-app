import React,{Component} from 'react';

class LabelComponent extends Component{
    render(){
        return(<div>
            <label >{this.props.children}</label>
        </div>);
    }
}

export default LabelComponent;