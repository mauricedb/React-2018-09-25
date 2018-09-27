import React from 'react';
import propTypes from 'prop-types';

function MovieListItem(props) {
  return (
    <li>
      {props.movie.title.toUpperCase()} {props.title2}
    </li>
  );
}

MovieListItem.defaultProps = {
  title2: 'Unkown'
};

MovieListItem.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string.isRequired
  }).isRequired,
  title2: propTypes.string
};
export default MovieListItem;
