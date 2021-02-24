import React from 'react';
import './Modal.css';
import { Button } from "react-bootstrap";


const Modal = ({ handleCancel, handleYes, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <Button variant="primary" size="sm" onClick={handleCancel}>Cancel</Button> <Button variant="primary" size="sm" onClick={handleYes}>Yes</Button>
        </section>
      </div>
    );
  };


export default Modal;