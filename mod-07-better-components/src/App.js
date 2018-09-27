import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ajax from './components/Ajax';
import Counter from './components/Counter';
import MovieList from './components/MovieList';

class App extends Component {
  static defaultProps = {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <Ajax
          url="/movies.json"
          render={movies => <MovieList movies={movies} />}
        /> */}

        {/* <Ajax url="/movies.json">
          {movies => <MovieList movies={movies} />}
        </Ajax> */}

        <Counter />
      </div>
    );
  }
}

export default App;
