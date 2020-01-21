import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      results: []
    }
  }

  // Check the API to see if the license exists
  grabInfo = async()=>{
    const request = await fetch('https://data.cityofnewyork.us/resource/nc67-uf89.json')

    const jsonData = await request.json()
    this.setState({results: jsonData.data})
    return(this.state.results != [])
  }

  // Check input to see if all inputs have been entered
  checkInput(event){
    event.preventDefault();
    let username = document.getElementById('usernameField').value;
    let pass= document.getElementById('passwordField').value;
    let platenum = document.getElementById('plateNumberField').value;
    if (username === '' || pass === ''){
      alert("You must fill in all info to sign up")
    }
    else if (platenum === ''){
      alert("You must input your plate number to sign up")
    }
    console.log(this.grabInfo())
  }

  render(){
    return(
      <div>
        <h1 className="signUpHeading">Sign Up</h1>
        <form className="signUpForm">
          <label>Enter Username: </label>
          <input id="usernameField" type="text" placeholder=""/>
          <br/>

          <label>Enter Password: </label>
          <input id="passwordField"type="password" placeholder=""/>
          <br/>

          <label>Enter Plate Number: </label>
          <input id="plateNumberField" type="text" placeholder=""/>
          <br/>
          <button onClick={(e)=>this.checkInput(e)} type='submit'>Sign Up!</button>
        </form>
      </div>
    )
  }
}

export default SignUp;