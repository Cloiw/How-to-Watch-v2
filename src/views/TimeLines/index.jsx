import React from 'react';
import data from '../../data/data.json';
import NoMatchPage from '../NoMatchPage/index.jsx';

const TimeLines = ({ match }) => (
  data[match.params.sagasId] === undefined ? <NoMatchPage />
    : (
      <div>
       soy esta saga men
        {' '}
        {match.params.sagasId}
        {data[match.params.sagasId].map((x) => x.release)}
      </div>
    )
);

export default TimeLines;
