import React, { Component } from 'react';
import Login from './Login.js';
import SignUp from './SignUp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //what needs to be done
      job: 'Home Page',
      loggedIn: false,
      count: 0,
      items: []
    }
  }

  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/nc67-uf89.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          })
        }
      )
  }

  guest = (e) => {
    console.log(this.state.items[1].summons_image.url)
    // this.setState({
    //   job: 'Display Summons Image'
    // })
  }


  

  userLogin = () => {
    this.setState({
      job: 'User Login'
    })
  }

  userSignup = () => {
    this.setState({
      job: "User Signup"
    })
  }
  
  navBar = () => {
    if (this.state.loggedIn === false) {
      return (
        <nav className="navbar">
          <h1>Ticket Traqqer</h1>
          <div className="navbarButtons">
            <button onClick={this.userLogin}>Log In</button>
            <button onClick={this.userSignup}>Sign Up</button>
          </div>
        </nav>
      )
    }
    if (this.state.loggedIn === true) {
      return (
        <nav className="navbar">
          <h1>Ticket Traqqer</h1>
          <div className="navbarButtons">
            <button onClick={this.homePage}>Home</button>
            <button onClick={this.login}>Logout</button>
          </div>
        </nav>
      )
    }
  }

  render() {
    let { job, count, navBar, items } = this.state
    navBar = this.navBar()

    if (job === 'Home Page') {
      return (
        <div className="App" >
          {navBar}
          <h1>Welcome to Ticket Traqqer!</h1>
          <button onClick={this.userLogin}>Log In</button>
          <button onClick={this.guest}>Continue As Guest</button>
        </div>
      );
    }

    else if (job === 'Display Summons Image') {
      return (
        <img src={items[1].summons_image.url}></img>
      )
    }

    else if (job === 'User Login'){
      return (
        <div className="userLogin">
          {navBar}
          <Login />
        </div>
      )
    }

    else if (job === "User Signup"){
      return (
        <SignUp/>
      )
    }

  }
}

export default App;