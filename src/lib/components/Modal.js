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

  const defaultMessage = (
    <>
      <h2>Well Done!</h2>
      <p>This is a simple modal you can customize whatever you want.</p>
    </>
  );

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
  message: defaultMessage,
  closeButtonText: "OK",
};

export default Modal;
