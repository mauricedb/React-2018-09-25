import React, { Component } from 'react';
import Greeter from './Greeter';

class Counter extends Component {
  state = {
    value: 0
  };
  dummy = { x: 1 };

  onClick = () => {
    this.setState(oldState => ({ value: oldState.value + 1 }));
    this.setState(oldState => ({ value: oldState.value + 1 }));
  };

  shouldComponentUpdate(newProps, newState) {
    return this.state.value !== newState.value;
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        Value: {value} <button onClick={this.onClick}>Increment</button>
        <Greeter firstName="Maurice" dummy={this.dummy} />
      </div>
    );
  }
}

export default Counter;
