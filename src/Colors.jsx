import React, { Component } from 'react';
// import './color.css'; // Make sure you import your CSS

export default class Colors extends Component {

  constructor() {
    super();
    this.state = {
      color: "white"
    };
  }

  handleColor = (clr) => {
    this.setState({ color: clr });
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }} id="color">
        <h1>Colors</h1>
        <button className="color-button red" onClick={() => this.handleColor("red")}>Red</button>
        <button className="color-button green" onClick={() => this.handleColor("green")}>Green</button>
        <button className="color-button yellow" onClick={() => this.handleColor("yellow")}>Yellow</button>
      </div>
    );
  }
}
