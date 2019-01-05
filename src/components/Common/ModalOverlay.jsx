//Receives true/false prop from parent to determine whether modal backdrop will show or not.
//Does not contain any content.
//Is always hiding in the background with z index -1.

import React from "react";

export default class ModalOverlay extends React.Component {
  render() {
    const showing = this.props.modal
      ? "modal-overlay showing"
      : "modal-overlay";
    return <div className={showing} />;
  }
}
