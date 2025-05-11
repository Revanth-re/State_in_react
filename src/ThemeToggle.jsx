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
      <div >
<div style={{backgroundColor:this.state.theme?"coral":"white",padding:"10%"}}>
        <h1 style={{color:this.state.theme?"white":"black"}}>Hello</h1>
        </div>
        <button onClick={this.handleTheme}>{this.state.theme?<IoMdSunny/>:<FaMoon/>}</button>
      </div>
    )
  }
}
