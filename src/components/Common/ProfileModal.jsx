import React from "react";
// import { Link } from "react-router";
import FullButton from "./FullButton.jsx";

import "../../css/ProfileModal.css";

import {
  faLock,
  faCreditCard,
  faInfoCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { modalStatus, modalToggle, modalType } = this.props;
    const showModalContent =
      modalStatus && modalType === "profile"
        ? "ProfileModal-container text-roboto"
        : "ProfileModal-container text-roboto shrink";

    return (
      <div className={showModalContent}>
        <div className="Profile-links-container">
          <FullButton
            color="black"
            icon={faLock}
            classList="btn btn-full btn-profile-link"
            btnText="Login & Security"
            onClick={() => {
              this.props.router.push();
            }}
          />
          <FullButton
            color="black"
            icon={faCreditCard}
            classList="btn btn-full btn-profile-link"
            btnText="Payment"
            onClick={() => {
              this.props.router.push();
            }}
          />
          <FullButton
            color="black"
            icon={faInfoCircle}
            classList="btn btn-full btn-profile-link"
            btnText="Help"
            onClick={() => {
              this.props.router.push();
            }}
          />
          <FullButton
            color="black"
            icon={faSignOutAlt}
            classList="btn btn-full btn-profile-link"
            btnText="Logout"
            action={this.props.signOut}
          />
        </div>

        <div
          className="close-modal zip-close"
          onClick={() => modalToggle(true, "")}
        >
          <span>&times;</span>
        </div>
      </div>
    );
  }
}
export default ProfileModal;
