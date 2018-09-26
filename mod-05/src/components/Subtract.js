import React, { Component } from 'react';

class Subtract extends Component {
  onClick = () => {
    const { value } = this.props;
  };
  render() {
    const { value } = this.props;
    return <button onClick={this.onClick}>Subtract {value}</button>;
  }
}

export default Subtract;
