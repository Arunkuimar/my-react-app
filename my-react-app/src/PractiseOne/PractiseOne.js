import React,{ Component } from 'react';

import UserInput from './UserInput/UserInput';

class PractiseOne extends Component {






    render(){
        return(<div>
            Hai Entered
            <UserInput changeEvent={this.UserInputChangeEvent} minValue='1' minValueMsg = 'Please Input the value'
            maxValue='5' maxValueMsg='Value should not be greater than 5 characters'>
            </UserInput>
        </div>);
    }
}

// const PractiseOne = ()=>{
//     return (<div>Hai</div>);
// }
export default PractiseOne;