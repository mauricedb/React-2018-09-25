import React, { Component } from 'react';

class UpdateFirstName extends Component {
  render() {
    const { firstName, changeFirstName } = this.props;

    return (
      <div>
        First name: <input value={firstName} onChange={changeFirstName} />
      </div>
    );
  }
}

export default UpdateFirstName;
