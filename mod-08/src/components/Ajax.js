import { Component } from 'react';

class Ajax extends Component {
  state = {
    loading: false,
    errors: null,
    data: []
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch(this.props.url)
      .then(rsp => rsp.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(errors => this.setState({ errors, loading: false }));
  }
  render() {
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
