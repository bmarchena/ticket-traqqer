import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserProfile from './UserProfile';
import App from './App';
import SignUp from './signUp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
