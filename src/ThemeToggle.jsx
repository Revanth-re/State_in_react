import React, { Component } from 'react'
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import "./App.css"
export default class ThemeToggle extends Component {

  constructor(){
    super()
    this.state={theme:false}
  }
  handleTheme=()=>{
    this.setState({theme:!this.state.theme})
  }
  render() {
    return (
    <div className="theme-wrapper">
  <div
    className="theme-box"
    style={{
      backgroundColor: this.state.theme ? "coral" : "white",
      color: this.state.theme ? "white" : "black",
    }}
  >
    <h1>Hello</h1>
  </div>
  <button className="theme-toggle-button" onClick={this.handleTheme}>
    {this.state.theme ? <IoMdSunny /> : <FaMoon />}
  </button>
</div>

    )
  }
}
