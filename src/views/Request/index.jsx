import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap';

import logo from '../../img/logo_crop.png';
import './Request.css';

const Request = () => (
  <div className="request-container">
    <Container fluid>
      <Row bsPrefix="row row-request">
        <Col md={6}>
          <img className="request-logo" src={logo} alt="Logo" />
          <div className="request-text">
            <p>
              ¿Didn&#39;t find your saga?
              <br />
              Send us your suggestions to include them in our catalog.
              <br />
              <em>
              Your email will only be used to confirm receipt of your message.
              </em>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control l as="textarea" rows="4" type="message" />
            </Form.Group>
            <Button variant="clasic" size="lg" block>
                Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>


);

export default Request;
