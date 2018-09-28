import { Component } from 'react';

class Ajax extends Component {
  state = {
    loading: false,
    errors: null,
    data: []
  };
  
  componentDidMount() {
    console.log('Ajax.did mount')
    this.setState({ loading: true });
    fetch(this.props.url)
      .then(rsp => rsp.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(errors => this.setState({ errors, loading: false }));
  }

  componentWillUnmount() {
    console.log('Ajax will unmount')
    // this.setState = () => {};
  }

  render() {
    console.log('Ajax.render')

    const { loading, errors, data } = this.state;
    const { children } = this.props;
    if (loading) {
      return 'Loading data...';
    }

    if (errors) {
      return 'There are dragons....';
    }

    return children(data);
  }
}

export default Ajax;
