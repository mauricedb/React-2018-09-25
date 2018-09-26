import React, { Component } from 'react';

class Rugby extends Component {
  render() {
    const {
      match: { params }
    } = this.props;

    console.log(this.props);
    return (
      <div>
        <h2>Rugby</h2>
        <img src="/rugby.jpg" alt="Rugby" width="600" />
        <div>{params.team}</div>
      </div>
    );
  }
}

export default Rugby;
