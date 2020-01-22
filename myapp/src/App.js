import React, { Component } from 'react';
import Login from './Login.js';
import SignUp from './signUp';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //what needs to be done
      job: 'Home Page',
      loggedIn: false,
      count: null,
      items: [],
    }
    this.countAccount = []
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

  goHome = () => {
    this.setState({
      job: 'Home Page'
    })
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

  guest = () => {
    this.setState({
      job: 'Guest Page'
    })
  }

  checkSummonsNumberIndex = () => {
    let summonsNumber = document.getElementById('summonsNumber').value
    console.log(summonsNumber)
    console.log(this.state.items[0].summons_number)
    let validNumber = false
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].summons_number === summonsNumber) {
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

  login = (e) => {
    e.preventDefault()
    alert('button works')
  }

  passwordReset = (e) => {
    e.preventDefault()
    this.setState({
      job: 'Change Password'
    })
  }

  // Check input to see if all inputs have been entered
  checkInput = (e) => {
    e.preventDefault()
    let username = document.getElementById('usernameField').value;
    let pass = document.getElementById('passwordField').value;
    let platenum = document.getElementById('plateNumberField').value;
    if (username === '' || pass === '' || platenum === '') {
      alert("All fields must be filled")
    }
    else {
      console.log(platenum)
      console.log(this.state.items[0].plate)
      let validPlate = false
      let j = 0
      for (let i = 0; i < this.state.items.length; i++) {
        j++
        if (this.state.items[i].plate === platenum) {
          validPlate = true
          this.countAccount.push(i)
        }
      }
      alert(j)
      if (validPlate) {
        this.setState({
          job: 'Account Home'
        })
      }
      else {
        alert('Invalid plate number, please try again.')
      }
    }
  }

  checkUsername = (e) => {

  }

  navBar = () => {
    if (this.state.loggedIn === false) {
      return (
        <nav className="navbar">
          <h1><a onClick={this.goHome}>Ticket Traqqer</a></h1>
          <ul>
            <li><a onClick={this.userLogin}>Log In</a></li>
            <li><a onClick={this.userSignup}>Sign Up</a></li>
          </ul>
        </nav>
      )
    }
    if (this.state.loggedIn === true) {
      return (
        <nav className="navbar">
          <h1>Ticket Traqqer</h1>
          <div className="navbarButtons">
            <ul>
              <li><a onClick={this.homePage}>Account</a></li>
              <li><a onClick={this.userLogin}>Logout</a></li>
            </ul>
          </div>
        </nav>
      )
    }
  }

  footer = () => {
    return (
      <div className='footer'>
        <h1>Copyright &copy; 2020, TicketTraqqer, All Rights Reserved</h1>
      </div>
    )
  }

  render() {
    let { job, count, navBar, footer } = this.state
    navBar = this.navBar()
    footer = this.footer()
    if (job === 'Home Page') {
      return (
        <div className="App" >
          {navBar}
          <h1>Welcome to Ticket Traqqer!</h1>
          <h3>Here at Ticket Traqqer, we allow users to manage their parking and camera violation tickets.<br /><br />
            These violations in New York City are public and we have made it simple for you to either search for a specific ticket, or you may make an account to save your tickets and stay up to date on paying your fine.</h3>
          <button onClick={this.userLogin}>Log In</button>
          <h2>or</h2>
          <button onClick={this.guest}>Continue As Guest</button>
          {footer}
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
          {footer}
        </div>
      )
    }

    else if (job === 'Guest Page Search') {
      return (
        <div className="App" >
          {navBar}
          <h1>Summons Image</h1>
          <embed src={this.state.items[count].summons_image.url} width="600" height="500" type="application/pdf"></embed>
          <br />
          <button onClick={this.guest}>Another search</button>
          {footer}
        </div>
      )
    }

    else if (job === 'User Login') {
      return (
        <div className="userLogin">
          {navBar}
          <Login login={this.login} passwordReset={this.passwordReset} />
          {footer}
        </div>
      )
    }

    else if (job === "User Signup") {
      return (
        <div className="userLogin">{navBar}
          <SignUp checkInput={this.checkInput} />
          {footer}
        </div>

      )
    }

    else if (job === "Account Home") {
      return (
        <div className="App" >
          {navBar}
          <h1>Welcome USERNAME</h1>
          <h2>You have {this.countAccount.length} parking violations.</h2>
          {footer}
        </div>
      )
    }

    else if (job === "Change Password") {
      return (
        <div className="App" >
          {navBar}
          <h1>Change Password</h1>
          <label>Enter your username:</label>
          <input type='type' id='checkUsername'></input>
          <button onClick={this.checkUsername}>Submit</button>
          <p>Forgot your username? Reset it <a onClick={this.usernameReset}>here!</a> </p>
          {footer}
        </div>
      )
    }
  }
}

export default App;