import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <div className='landing-text'>
                <h3>Are You Interested In Learning Data Structures?! With our spaced-repetition algorithm you can learn data structures in just a few minutes a day</h3>
                <h4></h4>
            </div>
            <LoginForm />
            <div className='create-account-btn'>
                <Link to="/register">Create Account</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
