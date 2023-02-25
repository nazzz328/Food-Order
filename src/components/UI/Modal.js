import React from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

export default function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
