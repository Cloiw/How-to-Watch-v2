import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data/data.json';
import NoMatchPage from '../NoMatchPage';

const TimeLines = ({ match }) => (
  data[match.params.sagasId] === undefined ? <NoMatchPage />
    : (
      <div>
       soy esta saga men
        {match.params.sagasId}
        {data[match.params.sagasId].map((x) => x.release)}
      </div>
    )
);

TimeLines.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default TimeLines;
