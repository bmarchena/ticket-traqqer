import React, { Component } from 'react';
import './App.css';

class Login extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="loginPage">
                <div>
                    <h1>Log In</h1>
                </div>
                <form className="loginForm">
                    <label>Enter Username:</label>
                    <input  type="text" placeholder="Username" id="loginUsername"></input>
                    <label>Enter Password:</label>
                    <input type="password" placeholder="Password" id="loginPassword"></input>
                    <button onClick={this.props.login}>Login</button>
                    <p>Forgot your password? Reset it <a onClick={this.props.passwordReset}>here!</a> </p>
                    <p>Forgot your username? Reset it <a onClick={this.props.usernameReset}>here!</a> </p>
                </form>
            </div>
        )
    }
}

export default Login;