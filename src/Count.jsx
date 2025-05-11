import React, { Component } from 'react';
// import './count.css'; // Import the updated CSS

export default class Count extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    handleincrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handlereset = () => {
        this.setState({ count: 0 });
    }

    handledecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div className="counter-container">
                <div className="counter-box">
                    <h1 className="count-title">Count</h1>
                    <h1 className="count-number">{this.state.count}</h1>
                    <div className="button-group">
                        <button className="counter-btn" onClick={this.handleincrement}>Increment</button>

                        <button className="counter-btn" onClick={this.handledecrement}>Decrement</button>
                                                <button className="counter-btn reset-btn" onClick={this.handlereset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}
