import React from 'react';
import propTypes from 'prop-types';

function MovieListItem({ movie }) {
  return <li onClick={() => {}}>{movie.title}</li>;
}

MovieListItem.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string.isRequired
  }).isRequired
};
export default MovieListItem;
