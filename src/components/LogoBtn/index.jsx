import React from 'react';
import PropTypes from 'prop-types';

const LogoBtn = ({ name }) => (
  typeof name === 'string'
    ? (
      <div>
        <img alt={name} src={require(`../../img/logos/${name}_img.png`)} />
      </div>
    )
    : null
);

LogoBtn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default LogoBtn;
