import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {toInstructions} from '../actions/questions';

import Count from './count';
import Instructions from './instructions';
import Question from './question';
import Answer  from './answer';

class Dashboard extends React.Component {
    componentDidMount() {
        // this.props.dispatch(fetchProtectedData());
    }

    handleInstructions(){
        this.props.dispatch(toInstructions());
    }

    render() {
        let instructionsButton;
        if(this.props.loggedIn && this.props.instructions === false){
            instructionsButton = (
                <button 
                    onClick={() => this.handleInstructions()}
                >
                Instructions
                </button>
            )
        }
        if(this.props.instructions===true){
            return(<Instructions />)
        }
        else{
            return (
                
                <div className="dashboard">
                    <div className='instruction-count'>
                        <div className='instruction-btn clearfix'>
                            {instructionsButton}
                        </div>
                        <Count />
                    </div>   
                    <Question />    
                    <Answer />
                </div>
        )};
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        loggedIn: state.auth.currentUser !== null,
        instructions: state.questions.instructions
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
