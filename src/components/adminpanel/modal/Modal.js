import React from "react";
import { Modal, Button } from "react-bootstrap";

const Modalcomponent = ({ show, handleclose, onokclick, modaltitle,modalbody,yespending }) => {

  const handleclickok = () => {
    onokclick(); 
    handleclose(); // بستن مودال
  };

  const handlecansel = () => {
    handleclose(); // بستن مودال
  };

  return (
    <Modal show={show} onHide={handlecansel}>
      <Modal.Header closeButton>
        <Modal.Title className="ff_medium">{modaltitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="ff_regular">{modalbody}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant="secondary" onClick={handlecansel}>
          Cancel
        </Button>
        <Button  variant="primary" onClick={handleclickok}>
          {yespending && (
            <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
          )}
          {!yespending && "Yes"}
          
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modalcomponent;