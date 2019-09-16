import React from 'react';
import data from '../../data/data.json'


const TimeLines = ({match, location}) => {

    return (
      <div>soy esta saga men {match.params.sagasId}
     { data[match.params.sagasId].map(x=>x.release)}</div>
    );
  };


export default TimeLines;
