import React, {Component} from 'react';

class Counter extends Component {
  constructor () {
    super();
    this.state = {
      counter: 0,
      double: false,
    }
  }


increment = () => {
  if(this.state.counter < 20) {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  if(this.state.double){
    if(this.state.counter < 19){
      this.setState({
        counter: this.state.counter + 2
      })
    }
  }
};

  render() {
    console.log("This is line 13 representating state", this.state.counter);
    console.log("This is the double value", this.state.double);
    return(
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.counter}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          </div>
      </div>
    )
  }
}

export default Counter;