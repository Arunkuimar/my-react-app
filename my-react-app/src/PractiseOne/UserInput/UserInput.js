import React,{Component} from 'react';
import './UserInput.css';
import DynamicLabel from '../DynamicLabel/DynamicLabel';
class UserInput extends Component {

state={
    labelName:''
};

    UserInputChangeEvent = (event,minValue,minValueMsg,maxValue,maxValueMsg)=>{
        let length = event.target.value.length;
            
        let errorMessage = document.getElementById('errorname');
        if(length<minValue){
            errorMessage.innerText = minValueMsg;
            this.setState({labelName:''});
        }else if(length>maxValue){
            errorMessage.innerText = maxValueMsg;
            this.setState({labelName:''});
        }else{
            errorMessage.innerText = '';
            this.setState({labelName:event.target.value});
        }
    };
    render(){

        return(<div>
            <input type='text' onChange={(event)=>this.UserInputChangeEvent(event,this.props.minValue,this.props.minValueMsg,
            this.props.maxValue,this.props.maxValueMsg)} required>
            </input>
            <span id="errorname" className='errorColor'></span>
            <DynamicLabel labelName={this.state.labelName}></DynamicLabel>
        </div>);
    }
}

export default UserInput;