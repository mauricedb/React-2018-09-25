import React, { Component } from 'react';

import { connect } from 'react-redux';

class Couter extends Component {
  render() {
    const { value } = this.props;
    
    return <div>The value is: {value}</div>;
  }
}

function mapStateToProps(state) {
  return {
    value: state.value
  };
}

export default connect(mapStateToProps)(Couter);
