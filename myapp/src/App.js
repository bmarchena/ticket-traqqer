import React, { Component } from 'react';
import Login from './Login.js';
import SignUp from './signUp';
import './App.css';

const db = require('./util/database')
db.execute('SELECT * FROM users')
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })

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
<<<<<<< HEAD

=======
    this.countAccount = []
>>>>>>> origin/ev_branch
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
<<<<<<< HEAD
  
=======

>>>>>>> origin/ev_branch
  guest = () => {
    this.setState({
      job: 'Guest Page'
    })
  }

  checkSummonsNumberIndex = () => {
    let summonsNumber = document.getElementById('summonsNumber').value
<<<<<<< HEAD
    let validNumber = false
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].summons_number == summonsNumber) {
=======
    console.log(summonsNumber)
    console.log(this.state.items[0].summons_number)
    let validNumber = false
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].summons_number === summonsNumber) {
>>>>>>> origin/ev_branch
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

<<<<<<< HEAD
=======
  login = (e) => {
    e.preventDefault()
    alert('button works')
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
      for (let i = 0; i < this.state.items.length; i++) {
        if (this.state.items[i].plate === platenum) {
          validPlate = true
          this.countAccount.push(i)
        }
      }
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

  ticketCount = () => {
    return this.countAccount.length
  }
>>>>>>> origin/ev_branch

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
            <button onClick={this.userLogin}>Logout</button>
          </div>
        </nav>
      )
    }
  }

  render() {
    let { job, count, navBar } = this.state
    navBar = this.navBar()

    if (job === 'Home Page') {
      return (
        <div className="App" >
          {navBar}
          <h1>Welcome to Ticket Traqqer!</h1>
          <button onClick={this.userLogin}>Log In</button>
          <h2>or</h2>
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
          <br />
          <button onClick={this.guest}>Another search</button>
        </div>
      )
    }

<<<<<<< HEAD
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
=======
    else if (job === 'User Login') {
>>>>>>> origin/ev_branch
      return (
        <div className="userLogin">
          {navBar}
          <Login login={this.login}/>
        </div>
      )
    }

    else if (job === "User Signup") {
      return (
        <div className="userLogin">{navBar}
          <SignUp checkInput={this.checkInput}/>
        </div>

      )
    }

    else if (job === "Account Home") {
      return (
        <div className="App" >
          {navBar}
          <h1>Welcome USERNAME</h1>
          <h2>You have {this.countAccount.length} parking violations.</h2>
        </div>
      )
    }
  }
}

export default App;