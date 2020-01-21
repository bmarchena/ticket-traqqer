import React, {Component} from 'react';
import './App.css';

class Login extends Component {

    render(){
        return(
            <div className="loginPage">
                <div>
                    <h1>Log In</h1>
                </div>
                <form className="loginForm">
                    <input type="text" placeholder="Username"></input>
                    <input type="text" placeholder="Password"></input>
                    <button>Login</button>
                    <p>Forgot your password? Reset it <a href=''>here!</a></p>
                </form>   
            </div>
        )
    }
}

export default Login;