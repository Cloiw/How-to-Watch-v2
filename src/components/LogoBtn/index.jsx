import React from 'react';
import PropTypes from 'prop-types';
import './LogoBtn.css';

const LogoBtn = ({ name }) => (
  typeof name === 'string'
    ? <img alt={name} className="img-logo" src={require(`../../img/logos/${name}_img.png`)} />
    : null
);

LogoBtn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default LogoBtn;
