import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "./lib/Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));

const message = (
  <>
    <h2>Well Done!</h2>
    <p>This is a simple modal you can customize whatever you want.</p>
  </>
);

root.render(
  <Modal openButttonText="Show modal" closeButtonText="OK" message={message} />
);
