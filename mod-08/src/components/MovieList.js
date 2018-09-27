import React from 'react';
import MovieListItem from './MovieListItem';

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

export default MovieList;
