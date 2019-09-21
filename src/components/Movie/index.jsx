import React from 'react';
import './Movie.css';

const Movie = ({ data }) => {
  console.log(data);
  return (
    <div className="movie-div">
      <p>{data.Title}</p>
      <img className="movie-poster" src={data.Poster} />
    </div>
  );
};

export default Movie;
