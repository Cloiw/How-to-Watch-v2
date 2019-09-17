import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import imgDescription from '../../img/img_home.png';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <Container fluid>
      <section>
        <Row bsPrefix="row row-description">
          <Col xs={12} md={5}>
            <img alt="Movie Sagas" className="img-description" src={imgDescription} />
          </Col>
          <Col xs={12} md={7}>
            <p className="home-description">
              This website helps you to watch your favorite movie sagas in the order that you want.
              <br />
              You only need to select a saga and you&#39;ll find it ordered acording to its release date
              or by the order in which the story enlapses.
            </p>
            <LinkContainer to="/sagas">
              <Button href="" variant="start" size="lg" block>
                Start
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </section>
    </Container>
  </div>
);

export default Home;
