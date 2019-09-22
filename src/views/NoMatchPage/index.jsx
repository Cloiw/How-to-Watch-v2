import React from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap';

import './NoMatchPage.css';

const NoMatchPage = () => (
  <Container fluid>
    <Row bsPrefix="row row-no-match">
      <h3>404 - Not found</h3>
    </Row>
  </Container>
);

export default NoMatchPage;
