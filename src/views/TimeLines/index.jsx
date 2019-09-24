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
    this.state = { releaseSaga: [], chronoSaga: [], isLoading: true };
    this.print = this.print.bind(this);
  }

  UNSAFE_componentWillMount() {
    const saga = data[this.props.match.params.sagasId];
    if (saga !== undefined) {
      const result = saga.areTheSame;
      this.setState({ areTheSame: result });
    }
  }

  componentDidMount() {
    const saga = data[this.props.match.params.sagasId];
    if (saga !== undefined) {
      this.print(saga, 'release');
      this.print(saga, 'chrono');
    }
  }

  async print(array, order) {
    const items = [];
    const movies = array[order];
    const chronoOrRelease = `${order}Saga`;

    for (let i = 0; i < movies.length; i += 1) {
      const response = await fetch(`https://www.omdbapi.com/?apikey=4bde1662&t=${movies[i]}`);
      const json = await response.json();
      items.push(json);
      this.setState({ [chronoOrRelease]: items });
    }
    return this.setState({ [chronoOrRelease]: items, isLoading: false });
  }

  render() {
    return (

      <div className="timeline-container">
        {data[this.props.match.params.sagasId] === undefined ? <NoMatchPage />
          : (
            <Container fluid>
              <section>
                {this.state.areTheSame
                  ? (
                    <Row bsPrefix="row row-timeline">
                      <Col md={{ span: 6, offset: 3 }}>
                        <h2 className="chrono-title">CHRONOLOGICAL</h2>
                        <h2 className="release-title">= RELEASE</h2>
                        <div className="timeline">
                          <h4 className="start-title">Start</h4>
                          { this.state.chronoSaga.length === 0 ? null : this.state.chronoSaga.map((x) => <Movie key={x.Title} data={x} />)}
                          {this.state.isLoading && <span>Loading . . .</span> }
                        </div>
                      </Col>
                    </Row>
                  )
                  : (
                    <Row bsPrefix="row row-timeline">
                      <Col md={6}>
                        <h2 className="chrono-title">CHRONOLOGICAL</h2>
                        <div className="timeline">
                          <h4 className="start-title">Start</h4>
                          { this.state.chronoSaga.length === 0 ? null : this.state.chronoSaga.map((x) => <Movie key={x.Title} class="chrono" data={x} />)}
                          {this.state.isLoading && <span>Loading . . .</span> }
                        </div>
                      </Col>
                      <Col md={6}>
                        <h2 className="release-title">RELEASE</h2>
                        <div className="timeline">
                          <h4 className="start-title">Start</h4>
                          { this.state.releaseSaga.length === 0 ? null : this.state.releaseSaga.map((x) => <Movie key={x.Title} class="release" data={x} />)}
                          {this.state.isLoading && <span>Loading . . .</span> }
                        </div>
                      </Col>
                    </Row>
                  )}

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
