import React, { Component } from 'react';
import Login from './Login.js';
import SignUp from './SignUp.js';
import './App.css';
import logo from './nyc_bg.jpg' 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //what needs to be done
      job: 'Home Page',
      loggedIn: false,
      count: 0,
      items: [],
      currentUser: '',
      currentPlate: '',
      fineAmount: 0,
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
  };

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

  userLogout = () => {
    this.setState({
      job: 'Home Page',
      loggedIn: false,
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

  // Check input to see if all inputs have been entered
  checkInput = (e) => {
    e.preventDefault()

    let username = document.getElementById('usernameField').value;
    let pass = document.getElementById('passwordField').value;
    let platenum = document.getElementById('plateNumberField').value;
    let ticketCount = 0
    let ticketFine = 0
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
          ticketCount ++
          ticketFine = ticketFine + this.state.items[i].fine_amount
          console.log(ticketFine)
        }
      }
      if (validPlate) {
        const response = fetch('http://localhost:5000/', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: username,
            password: pass,
            plateno: platenum,
            fineAmount: ticketFine
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
          });
        this.setState({
          job: 'Account Home',
          count: ticketCount,
          currentUser: username,
          currentPlate: platenum
        })
      }
      else {
        alert('Invalid plate number, please try again.')
      }
    }
  }

  navBar = () => {
    if (this.state.loggedIn === false) {
      return (
        <nav className="navbar">
          <ul>
            <li><a className='navlink' onClick={this.goHome}>Ticket Traqqer</a></li>
          </ul>
          <ul>
            <li><a className='navlink' onClick={this.userLogin}>Log In</a></li>
            <li><a className='navlink' onClick={this.userSignup}>Sign Up</a></li>
          </ul>
        </nav>
      )
    }

    if (this.state.loggedIn === true) {
      return (
        <nav className="navbar">
          <ul>
            <li><a className='navlink' onClick={this.goHome}>Ticket Traqqer</a></li>
          </ul>
          <ul>
            <li><a className='navlink' onClick={this.homePage}>Account</a></li>
            <li><a className='navlink' onClick={this.userLogout}>Logout</a></li>
          </ul>
        </nav>
      )
    }
  }

  footer = () => {
    return (
      <div>
        <div className="phantom" />
        <div className='footer'>
          <h1>Copyright &copy; 2020, TicketTraqqer, All Rights Reserved</h1>
        </div>
      </div>

    )
  }

  render() {
    let { job, count, currentUser, currentPlate, navBar, footer, fineAmount } = this.state
    navBar = this.navBar()
    footer = this.footer()

    if (job === 'Home Page') {
      return (
        <div className="App" >
          {navBar}
          <h1>Welcome to Ticket Traqqer!</h1>
          <img src={logo} alt='nyc' width='500' height='333' />
          <h3>Here at Ticket Traqqer, we allow users to manage their parking and camera violation tickets.<br /><br />
            These violations in New York City are public and we have made it simple for you to either search for a specific ticket, or you may make an account to save your tickets and stay up to date on paying your fine.</h3>
          <button onClick={this.userLogin}>Log In</button>
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
          <Login login={this.login} passwordReset={this.passwordReset} usernameReset={this.usernameReset} />
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
          <h1>Welcome {currentUser}</h1>
          <h2>Based on license plate {currentPlate}, you have {count} parking violation/s.</h2>
          <h2>In total, you were fined ${fineAmount}.</h2>
          <h1>Pay your fine <a href="https://secure24.ipayment.com/NYCPayments/nycbookmark.htm" target="_blank">here.</a></h1>
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
          {footer}
        </div>
      )
    }

    else if (job === "Change Username") {
      return (
        <div className="App" >
          {navBar}
          <h1>Change Username</h1>
          <label>Enter your plate number:</label>
          <input type='type' id='checkPlates'></input>
          <br />
          <label>Enter your password:</label>
          <input type='type' id='checkPass'></input>
          <br />
          <button onClick={this.checkChangeUsername}>Submit</button>
          {footer}
        </div>
      )
    }
  }
}
export default App;


//what is the app about?
//roles of each member
//share website wireframe img
//share any interesting code
