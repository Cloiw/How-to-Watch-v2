import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import ModalMovie from '../ModalMovie';

const Movie = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div tabIndex="0" role="button" onKeyPress={() => setModalShow(true)} onClick={() => setModalShow(true)} className={`movie-div ${props.class}`}>
        <p className="movie-title">{props.data.Title}</p>
        <img className="movie-poster" alt={props.data.Title} src={props.data.Poster} />
      </div>
      <ModalMovie
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={props.data}
      />
    </div>
  );
};
Movie.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
  class: PropTypes.string,
};
Movie.defaultProps = {
  class: '',
};

export default Movie;
