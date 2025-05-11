import React, { Component } from 'react'
import Signup from './Signup'
import TestLogin from './TestLogin'
import TestSignup from './TestSignup'
export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
          signup:false,
          Login:false
        }
      }
      Signup=()=>{
        this.setState({signup:!this.state.signup})
      }
      Login=()=>{
        this.setState({Login:!this.state.Login})
      }
  render() {
    // console.log(this.state)
    return (
      <div>
  <div className="header-container">
    <h2 className="header-logo">Logo</h2>
    <div className="auth-buttons">
      <button onClick={this.Signup}>Signup</button>
      <button onClick={this.Login}>Login</button>
    </div>
  </div>

  {this.state.signup && <TestSignup />}
  {this.state.Login && <TestLogin />}
</div>

    )
  }
}
