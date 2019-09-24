import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import './ModalMovie.css';

const ModalMovie = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {props.data.Title}
      </Modal.Title>

    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row className="show-grid">
          <Col md={{ span: 6, offset: 3 }}>
            <img alt={props.data.Title} className="modal-img" src={props.data.Poster} />
          </Col>
          <Col md={12}>
            <p>
              {' '}
              <b>Actors :</b>
              {' '}
              {props.data.Actors}
              {' '}
            </p>
            <p>
              {' '}
              <b>Runtime :</b>
              {' '}
              {props.data.Runtime}
              {' '}
            </p>
            <p>
              {' '}
              <b>Year :</b>
              {' '}
              {props.data.Year}
              {' '}
            </p>
            <p>
              {' '}
              <b>Director : </b>
              {props.data.Director}
            </p>
            <p>
              {' '}
              <b>Production :</b>
              {' '}
              {props.data.Production}
            </p>
            <p>
              {' '}
              <b>Plot :</b>
              {' '}
              {props.data.Plot}
              {' '}
            </p>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="clasic" onClick={props.onHide} size="lg" block>Close</Button>
    </Modal.Footer>
  </Modal>
);

ModalMovie.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
  onHide: PropTypes.func.isRequired,
};
export default ModalMovie;
