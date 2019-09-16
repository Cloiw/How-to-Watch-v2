import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css';
import imgDescription from '../../img/img_home.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Container fluid>
          <section>
          <Row bsPrefix="row row-description">
            <Col md={7}>
              <p className="home-description">
                Our website helps you to watch your favorite movie sagas in the order that you want.<br></br>
                You only need to select  you favorite saga and you'll find it ordered acording to its release date 
                or by the order in which the story enlapses.
              </p> 
              <button> oli</button>
            </Col>
            <Col md={5}>
              <img className="img-description" src={imgDescription} />
            </Col>
          </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Home;
