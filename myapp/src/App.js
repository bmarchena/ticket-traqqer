import React, { Component } from 'react';
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
    console.log(this.state.items[0].summons_image.url)
    // this.setState({
    //   job: 'Display Summons Image'
    // })
  }


  navBar = () => {
    if (!this.state.loggedIn) {
      return (
        <nav className="">
          <h1>Ticket Traqqer</h1>
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Signup</button>
        </nav>
      )
    }
    if (this.state.loggedIn) {
      return (
        <nav className="">
          <h1>Ticket Traqqer</h1>
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
          <h1>Ticket Traqqer</h1>
          <button onClick={this.login}>Log In</button>
          <button onClick={this.guest}>Continue As Guest</button>
        </div>
      );
    }

    else if (job === 'Display Summons Image') {
      return (
        <img src={items[1].summons_image.url}></img>
      )
    }
  }
}

export default App;