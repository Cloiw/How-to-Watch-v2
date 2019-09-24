import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => {
return(
  <div className={"movie-div "+props.class} >
    <p className="movie-title">{props.data.Title}</p>
    <img className="movie-poster" alt={props.data.Title} src={props.data.Poster} />
  </div>
);
}
Movie.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default Movie;
