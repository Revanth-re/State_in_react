import React, { Component } from 'react';
// import './Rcolors.css'; // Import your CSS file

export default class Rcolors extends Component {
    constructor() {
        super();
        this.state = {
            Rcolor: ""
        };
    }

    handleRandomcolor = () => {
        let chars = "abcdef0123456789";
        let hexa = "#";
        for (let i = 0; i < 6; i++) {
            let rand = Math.floor(Math.random() * chars.length);
            hexa += chars[rand];
        }
        this.setState({ Rcolor: hexa });
    }

    render() {
        return (
            <div className="container" style={{ backgroundColor: this.state.Rcolor }}>
                <h1 className="title">Random Colors</h1>
                <button className="color-button" onClick={this.handleRandomcolor}>Generate Color</button>
            </div>
        )
    }
}
