import React, { Component } from 'react';

class Add extends Component {
    onClick = () => {
        const { value } = this.props;
      };
      render() {
        const { value } = this.props;
        return <button onClick={this.onClick}>Add {value}</button>;
      }
    }

export default Add;