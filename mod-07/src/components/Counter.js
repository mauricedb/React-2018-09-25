import React, { Component } from 'react';
import Greeter from './Greeter';

class Counter extends Component {
  state = {
    value: 0
  };

  onClick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        Value: {value} <button onClick={this.onClick}>Increment</button>
        <Greeter />
        <Greeter firstName="Maurice" />
      </div>
    );
  }
}

export default Counter;
