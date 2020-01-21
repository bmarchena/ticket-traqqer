import React, { Component } from 'react';
<<<<<<< HEAD
import Login from './Login.js';
import logo from './logo.svg';
=======
>>>>>>> origin/ev_branch
import './App.css';
import signUp from './signUp';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //what needs to be done
      job: 'Home Page',
      loggedIn: false,
      count: null,
      items: []
    }

    this.login = new Login
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

<<<<<<< HEAD
  guest = (e) => {
    console.log(this.state.items[1].summons_image.url)
    // this.setState({
    //   job: 'Display Summons Image'
    // })
=======
  login = () => {
    this.setState({
      job: 'Login Page'
    })
>>>>>>> origin/ev_branch
  }

  guest = () => {
    this.setState({
      job: 'Guest Page'
    })
  }

  checkSummonsNumberIndex = () => {
    let summonsNumber = document.getElementById('summonsNumber').value
    let validNumber = false
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].summons_number == summonsNumber) {
        validNumber = true
        break
      }
    }
    if (validNumber) {
      let index = this.state.items.findIndex(item => item.summons_number === summonsNumber)
      this.setState({
        count: index,
        job: 'Guest Page Search'
      })
    }
    else {
      alert('Invalid Summons Number, please try again.')
    }
  }

  navBar = () => {
    if (!this.state.loggedIn) {
      return (
        <nav className="navbar">
          <h1>Ticket Traqqer</h1>
<<<<<<< HEAD
          <div className="navbarButtons">
            <button onClick={this.homePage}>Home</button>
            <button onClick={this.login}>Logout</button>
          </div>
=======
          <a href='index.js' onClick={this.login}>Login</a>
          <a onClick={signUp}>Signup</a>
>>>>>>> origin/ao_branch
        </nav>
      )
    }
    else if (this.state.loggedIn) {
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

  userLogin = () => {
    this.setState({
      job: 'User Login'
    })
  }

  render() {
    let { job, count, navBar, items } = this.state
    navBar = this.navBar()

    if (job === 'Home Page') {
      return (
        <div className="App" >
          {navBar}
<<<<<<< HEAD
          <h1>Ticket Traqqer</h1>
          <button onClick={this.userLogin}>Log In</button>
=======
          <h1>Welcome to Ticket Traqqer!</h1>
          <button onClick={this.login}>Log In</button>
          <h2>or</h2>
>>>>>>> origin/ev_branch
          <button onClick={this.guest}>Continue As Guest</button>
        </div>
      );
    }

    else if (job === 'Guest Page') {
      return (
        <div className="App" >
          {navBar}
          <h2>Enter Summons Number:</h2>
          <input type='text' id='summonsNumber'></input>
          <button onClick={this.checkSummonsNumberIndex}>Submit</button>
        </div>
      )
    }

    else if (job === 'Guest Page Search') {
      return (
        <div className="App" >
          {navBar}
          <h1>Summons Image</h1>
          <embed src={this.state.items[count].summons_image.url} width="600" height="500" type="application/pdf"></embed>
          <button onClick={this.guest}>Another search</button>
        </div>
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

  }
}

export default App;