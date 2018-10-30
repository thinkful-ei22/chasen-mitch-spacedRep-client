import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Favicon from 'react-favicon';
import App from './components/app';
import store from './store';
import './index.css';


ReactDOM.render(
    <div>
    <Favicon url="https://s3.us-east-2.amazonaws.com/mg-icons/ds_favicon.png" />
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    </div>,
    document.getElementById('root')
);
