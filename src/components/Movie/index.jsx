import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => (
  <div className={`movie-div ${props.class}`}>
    <p className="movie-title">{props.data.Title}</p>
    <img className="movie-poster" alt={props.data.Title} src={props.data.Poster} />
  </div>
);
Movie.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
  class: PropTypes.string,
};
Movie.defaultProps = {
  class: '',
};

export default Movie;
