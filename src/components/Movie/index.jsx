import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ data }) => (
  <div className="movie-div">
    <p className="movie-title">{data.Title}</p>
    <img className="movie-poster" alt={data.Title} src={data.Poster} />
  </div>
);

Movie.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default Movie;
