import React, { Component } from 'react';

class Movies extends Component {
  state = {
    movies: []
  };
  componentWillMount() {
    fetch('movies.json')
      .then(rsp => rsp.json())
      .then(movies => this.setState({ movies }));
  }
  render() {
    const { movies } = this.state;

    return (
      <div>
        <h2>Movies</h2>
        <ul>
          {movies.map(m => (
            <li>{m.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Movies;
