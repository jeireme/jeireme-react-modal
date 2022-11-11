import React, { useState } from "react";
import "./Modal.css";

/**
 * Displays a modal and an overlay on button click
 *
 * @component
 * @example
 * return (
 *   <Modal openButttonText="Show modal" closeButtonText="OK" message="The modal message" />
 * )
 */
function Modal(props) {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setModal(true)}>{props.openButttonText}</button>
      <div
        className={modal ? "overlay overlay-active" : "overlay"}
        onClick={() => setModal(false)}
      ></div>
      <div className={modal ? "modal-content modal-active" : "modal-content "}>
        {props.message}
        <button onClick={() => setModal(false)}>{props.closeButtonText}</button>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  openButttonText: "Show modal",
  message: "The modal message",
  closeButtonText: "OK",
};

export default Modal;
