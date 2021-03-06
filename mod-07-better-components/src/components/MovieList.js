import React, { Component } from 'react';
import MovieListItem from './MovieListItem';
import errorBoundary from './errorBoundary'

const MovieList = ({ movies }) => (
  <div>
    <h2>Movies</h2>
    <ul>
      {movies.map(m => (
        <MovieListItem key={m.id} movie={m} />
      ))}
    </ul>
  </div>
);

export default errorBoundary(MovieList);
