import React, { Component } from 'react';
import './App.css';
import SignUp from './signUp';

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

  login = () => {
    this.setState({
      job: 'Login Page'
    })
  }

  guest = () => {
    this.setState({
      job: 'Guest Page'
    })
  }

  checkSummonsNumberIndex = () => {
    let summonsNumber = document.getElementById('summonsNumber').value
    if (!this.state.items.summons_number.includes(summonsNumber)) {
      alert('Invalid Summons Number, please try again.')
    }
    else {
      let index = this.state.items.findIndex(item => item.summons_number === summonsNumber)
      this.setState({
        count: index,
        job: 'Guest Page Search'
      })
    }
  }

  //this.state.items[0].summons_image.url

  navBar = () => {
    if (!this.state.loggedIn) {
      return (
        <nav className="">
          <h1>TicketTraqqer</h1>
          <a href='index.js' onClick={this.login}>Login</a>
          <a onClick={SignUp}>Signup</a>
        </nav>
      )
    }
    else if (this.state.loggedIn) {
      return (
        <nav className="">
          <h1>TicketTraqqer</h1>
          <button onClick={this.homePage}>Home</button>
          <button onClick={this.login}>Logout</button>
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
          <h1>Welcome to TicketTraqqer!</h1>
          <button onClick={this.login}>Log In</button>
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
          <button onClick={this.guest}>Another search</button>
        </div>
      )
    }
  }
}

export default App;