import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

class SignUp extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className='loginPage' action="/" method="post">
                <h1>Sign Up</h1>
                <form className='loginForm'>
                    <label>Enter Username: </label>
                    <input id="usernameField" type="text" placeholder="Username" />
                    <label>Enter Password: </label>
                    <input id="passwordField" type="password" placeholder="Password" />
                    <label>Re-enter Password: </label>
                    <input id="passwordField2" type="password" placeholder="Password" />
                    <label>Enter Plate Number: </label>
                    <input id="plateNumberField" type="text" placeholder="Plate Number" />
                    <button onClick={this.props.checkInput}>Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default SignUp;