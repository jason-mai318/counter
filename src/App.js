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
  this.setState({
    counter: this.state.counter +1
  })
};

reset = () => {
  this.setState({
    counter: 0
  })
};

  render() {
    return(
      <div className="container">
        <div className="navbar">Counter</div>
        <div className="counter">
          {this.state.counter}
          <button type="button" onClick={this.increment}>Add 1</button>
          <button type="button" onClick={this.reset}>Reset</button>
          </div>
      </div>
    )
  }
}

export default Counter;