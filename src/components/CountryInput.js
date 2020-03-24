import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CountryInput(props) {


  return (
    <Modal
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <ListGroup>
          <ListGroup.Item onClick={props.plhandler}>Poland</ListGroup.Item>
          <ListGroup.Item onClick={props.sphandler}>Spain</ListGroup.Item>
          <ListGroup.Item onClick={props.gehandler}>Germany</ListGroup.Item>
          <ListGroup.Item onClick={props.frhandler}>France</ListGroup.Item>
        </ListGroup>
    </Modal>
  );
}