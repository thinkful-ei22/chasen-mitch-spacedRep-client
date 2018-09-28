import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';


class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    
    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let greeting;
        console.log(this.props.user);
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
            greeting = (
                <h3>Hi, {this.props.user.firstName}</h3>
            );
        }
        
        return (
            <div className="header-bar">
                <div className='top-header'>
                    {greeting}
                    {logOutButton}
                </div>
                <div className='title'>
                    <h1>Data Structures</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    instructions: state.questions.instructions,
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(HeaderBar);
