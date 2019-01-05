//Receives true/false prop from parent to determine whether modal backdrop will show or not.
//Does not contain any content.
//Is always hiding in the background with z index -1.

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBell } from "@fortawesome/free-solid-svg-icons";

export default class Notification extends React.Component {
  render() {
    const showing = this.props.notification
      ? `notification showing ${this.props.type}`
      : "notification";
    return (
      <div className={showing}>
        <div className="notifi-content">
          <div className="noti-faHolder">
            <FontAwesomeIcon
              color="white"
              style={{ verticalAlign: "middle" }}
              icon={faBell}
            />
          </div>
          <div className="noti-msgHolder">{this.props.msg}</div>
        </div>
      </div>
    );
  }
}
