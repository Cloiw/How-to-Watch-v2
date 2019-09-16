import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Container>
          <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <p>sadksadjksa</p>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
