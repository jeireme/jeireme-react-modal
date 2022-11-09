import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setModal(true)}>Show Modal</button>
      <div
        className={modal ? "overlay overlay-active" : "overlay"}
        onClick={() => setModal(false)}
      ></div>
      <div className={modal ? "modal-content modal-active" : "modal-content "}>
        <h2>Well Done!</h2>
        <p>This is a simple modal you can customize whatever you want.</p>
        <button onClick={() => setModal(false)}>OK</button>
      </div>
    </div>
  );
}

export default Modal;
