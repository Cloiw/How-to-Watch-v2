import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import data from '../../data/data.json';
import NoMatchPage from '../NoMatchPage';
import Movie from '../../components/Movie/index.jsx';


class TimeLines extends React.Component {
  constructor() {
    super();
    this.state = { movie: [] };
    this.print = this.print.bind(this);
  }


  componentDidMount() {
    const saga = data[this.props.match.params.sagasId];
    this.print(saga, 'release');
  }

  async print(array, order) {
    const items = [];
    const movies = array[order];
    for (let i = 0; i < movies.length; i += 1) {
      console.log('Consultanding', `http://www.omdbapi.com/?apikey=4bde1662&t=${movies[i]}`);
      const response = await fetch(`http://www.omdbapi.com/?apikey=4bde1662&t=${movies[i]}`);
      const json = await response.json();
      items.push(json);
    }
    return this.setState({ movie: items });
  }

  render() {
    return (

      <div className="timeline-container">
        <Container fluid>
          <section>
            <Row bsPrefix="row row-timeline">
              <Col md={6}>
                {data[this.props.match.params.sagasId] === undefined ? <NoMatchPage />
                  : (
                    <div>
                      { this.state.movie.length === 0 ? null : this.state.movie.map((x) => <Movie data={x} />)}
                    </div>
                  )}
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}
TimeLines.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default TimeLines;
