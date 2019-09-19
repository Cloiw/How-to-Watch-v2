import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data/data.json';
import NoMatchPage from '../NoMatchPage';
import Movie from '../../components/Movie/index.jsx';



class TimeLines extends React.Component {
  constructor(){
    super();
  this.state = {movie:[]}
  this.print = this.print.bind(this);
  }

  async print(array, order) {
    const items = []
    array = array[order]
    for (let i = 0; i < array.length; i++) {
      console.log("Consultanding", "http://www.omdbapi.com/?apikey=4bde1662&t=" + array[i])
      let response = await fetch("http://www.omdbapi.com/?apikey=4bde1662&t=" + array[i])
      let json = await response.json();
      items.push(json)
    }
    return this.setState({movie : items})
  }
 
  componentDidMount() {
    const saga = data[this.props.match.params.sagasId]
    this.print( saga, 'release')
  }
  
  render (){
  
  return (
  data[this.props.match.params.sagasId] === undefined ? <NoMatchPage />
    : (
      <div>
       soy esta saga m3n
       { this.state.movie.length === 0 ? null : this.state.movie.map((x) => <Movie data = {x} />)}
      </div>
    )
);
    }}
TimeLines.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default TimeLines;
