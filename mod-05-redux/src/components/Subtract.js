import React, { Component } from 'react';
import { connect } from 'react-redux';

import { subtractValueLater } from '../actions';

class Subtract extends Component {
  onClick = () => {
    const { value, dispatchSubtractValue } = this.props;
    dispatchSubtractValue(value);
  };
  render() {
    const { value } = this.props;
    return <button onClick={this.onClick}>Subtract {value}</button>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSubtractValue(value) {
      const action = subtractValueLater(value);
      dispatch(action);
    }
  };
}
export default connect(
  null,
  mapDispatchToProps
)(Subtract);
