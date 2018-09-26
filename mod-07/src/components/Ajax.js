import React, { Component } from 'react';
// import MovieList from './MovieList';

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
      .catch(err => this.setState({ errors: err, loading: false }));
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
    // return 'Data loaded ';
    // return <MovieList movies={this.state.movies} />;
  }
}

export default Ajax;
