import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addValue } from '../actions';

class Add extends Component {
  onClick = () => {
    const { value, dispatchAddValue } = this.props;
    dispatchAddValue(value);
  };
  render() {
    const { value } = this.props;
    return <button onClick={this.onClick}>Add {value}</button>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddValue(value) {
      const action = addValue(value);
      dispatch(action);
    }
  };
}
export default connect(
  null,
  mapDispatchToProps
)(Add);
