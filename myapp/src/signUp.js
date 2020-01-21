import React, { Component } from 'react';
import './App.css';


class signUp extends Component{

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
  }
  render(){
    return(
      <div>
        <h1>Sign Up</h1>
        <form>
          <label>Enter Username: </label>
          <input id="usernameField" type="text" placeholder=""/>
          <label>Enter Password: </label>
          <input id="passwordField"type="password" placeholder=""/>
          <label>Enter Plate Number: </label>
          <input id="plateNumberField" type="text" placeholder=""/>
          <button onClick={(e)=>this.checkInput(e)} type='submit'>Sign Up!</button>
        </form>
      </div>
    )
  }
}

export default signUp;