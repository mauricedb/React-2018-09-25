import React, { PureComponent } from 'react';

class Greeter extends PureComponent {
  render() {
    const { firstName } = this.props;

    console.count('Greeter.render');

    return <div> Hello {firstName}</div>;
  }
}

export default Greeter;
