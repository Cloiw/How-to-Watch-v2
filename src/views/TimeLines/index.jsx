import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data/data.json';
import NoMatchPage from '../NoMatchPage';
import Movie from '../../components/Movie/index.jsx';



const TimeLines = ({ match }) => {
  const saga = data[match.params.sagasId]

  const print = async(array) => {
    const chronoItems = []
    for (let i = 0; i < array.length; i++) {
      let response = await fetch("http://www.omdbapi.com/?apikey=4bde1662&t=" + array[i])
      let json = await response.json();
      chronoItems.push(<Movie data={json} />)
    }
    console.log(chronoItems)
    return chronoItems
  }
  print(saga[0].release).then(res => console.log(res))
  


  return (
  data[match.params.sagasId] === undefined ? <NoMatchPage />
    : (
      <div>
       soy esta saga men

        {match.params.sagasId}
        {data[match.params.sagasId].map((x) => x.release)}
      </div>
    )
);
    }
TimeLines.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default TimeLines;
