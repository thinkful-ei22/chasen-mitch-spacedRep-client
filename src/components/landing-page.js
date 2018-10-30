import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './float-grid.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <div className='landing-text row'>
                <h3 className="col-6">Are You Interested In Learning Data Structures?! With our spaced-repetition algorithm you can learn data structures in just a few minutes a day</h3>
                <h3 className="col-6">Demo User: demouser1 Password: password123</h3>
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
