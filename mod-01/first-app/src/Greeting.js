import React from 'react';

class Greeting extends React.Component {
  componentWillMount() {
    console.log('WillMount');
  }
  componentDidMount() {
    const { firstName, lastName } = this.props;
    console.log('DidMount', firstName, lastName);
  }
  componentDidUpdate() {
    console.log('DidUpdate');
  }
  render() {
    console.log('Render');
    const { firstName, lastName } = this.props;

    // Don't do that !!!!!!!
    // this.props.firstName = 'Updated';

    if (firstName) {
      return (
        <div>
          Hello {firstName} {lastName}
        </div>
      );
    } else {
      return null;
      //   return <div>Stranger</div>;
    }
  }
}

export default Greeting;
