import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import LogoBtn from '../../components/LogoBtn';
import data from '../../data/data.json';


const Sagas = () => (
  <div className="sagas-container">
    <Container fluid>
      <Col>
        <Row bsPrefix="row row-sagas" md={3}>
          {Object.keys(data).map((name) => (
            <Link key={name} to={`/sagas/${name}`}>
              <LogoBtn name={name} />
            </Link>
          ))}
        </Row>
      </Col>
    </Container>
  </div>
);


export default Sagas;
