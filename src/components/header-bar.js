import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import { Count } from './count';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let greeting;
        
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
            greeting = (
                <h3>Hi, UserName</h3>
            );
        }
        
        return (
            <div className="header-bar">
                <div className='top-header'>
                    {greeting}
                    {logOutButton}
                </div>
                <h1>Data Structures</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    instructions: state.protectedData.instructions
});

export default connect(mapStateToProps)(HeaderBar);
