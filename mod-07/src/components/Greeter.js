import React, { Component } from 'react';

class Greeter extends Component {
  render() {
    const { firstName } = this.props;

    // console.count('Greeter.render');

    return <div> Hello {firstName}</div>;
  }
}

export default Greeter;
