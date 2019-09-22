import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import data from '../../data/data.json';
import NoMatchPage from '../NoMatchPage';
import Movie from '../../components/Movie/index.jsx';
import './TimeLines.css';


class TimeLines extends React.Component {
  constructor() {
    super();
    this.state = { movie: [], isLoading: true };
    this.print = this.print.bind(this);
  }

  componentDidMount() {
    const saga = data[this.props.match.params.sagasId];
    if (saga !== undefined) {
      this.print(saga, 'release');
    }
  }

  async print(array, order) {
    const items = [];
    const movies = array[order];
    for (let i = 0; i < movies.length; i += 1) {
      const response = await fetch(`http://www.omdbapi.com/?apikey=4bde1662&t=${movies[i]}`);
      const json = await response.json();
      items.push(json);
      this.setState({ movie: items });
    }
    return this.setState({ movie: items, isLoading: false });
  }

  render() {
    return (

      <div className="timeline-container">
        {data[this.props.match.params.sagasId] === undefined ? <NoMatchPage />
          : (
            <Container fluid>
              <section>
                <Row bsPrefix="row row-timeline">
                  <Col md={6}>

                    <div>
                      { this.state.movie.length === 0 ? null : this.state.movie.map((x) => <Movie key={x.Title} data={x} />)}
                      {this.state.isLoading && <span>Loading . . .</span> }
                    </div>

                  </Col>
                </Row>
                <Row bsPrefix="row row-description">
                  <Col md={6}>
                    <LinkContainer to="/sagas">
                      <Button href="" variant="clasic" size="lg" block>
                        Back
                      </Button>
                    </LinkContainer>
                  </Col>
                </Row>
              </section>
            </Container>
          )}
      </div>
    );
  }
}
TimeLines.propTypes = {
  match: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default TimeLines;
