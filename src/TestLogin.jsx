import React, { Component } from 'react'

export default class TestLogin extends Component {
  render() {
    return (
       <div className="signup-container">
  <input className="input-field" type="text" placeholder="Enter name" /> <br />
  {/* <input className="input-field" type="text" placeholder="Enter email" /> <br />
  <input className="input-field" type="text" placeholder="Enter password" /> <br /> */}
  <input className="input-field" type="text" placeholder="Confirm password" /> <br />
  <button className="signup-button">Login</button>
</div>


    )
  }
}