import React, { Component } from 'react';
import "./App.css"


class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      size: 1,
      min_limit: 0,
      max_limit: 25,
    }
  }


  increment = () => {
    if (this.state.counter + this.state.size <= this.state.max_limit) {
      this.setState({
        counter: this.state.counter + this.state.size
      })
    }
    else {
      this.setState({
        counter: this.state.counter
      })
    }
  };

  decrement = () => {
    if (this.state.counter - this.state.size >= this.state.min_limit) {
      this.setState({
        counter: this.state.counter - this.state.size
      })
    }
    else {
      this.setState({
        counter: this.state.counter
      });
    }
  };

  toggle = () => {
    if (this.state.size == 1) {
      this.setState({
        size: 2
      })
    }
    if (this.state.size == 2) {
      this.setState({
        size: 1
      })
    }
  };


  reset = () => {
    this.setState({
      counter: 0
    })
  };

  render() {
    return (
      <div className="container">
        <div className="navbar">Counter</div>
        <div className="counter">
          <h1>{this.state.counter}</h1>
          <h4>Minimum: {this.state.min_limit} | Maximum: {this.state.max_limit} | Current Increment Size: {this.state.size}</h4>
          <button type="button" onClick={this.increment}>Add</button>
          <button type="button" onClick={this.decrement}>Subtract</button>
          <button type="button" onClick={this.toggle}>Toggle Increment Size</button>
          <button type="button" onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }

}

export default Counter;