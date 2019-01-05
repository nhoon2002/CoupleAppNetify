import React from "react";
import { Link } from "react-router";
import FullButton from "./FullButton.jsx";
import "../../css/ZipcodeModal.css";
class ZipcodeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", placeholder: "" };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loginStatus && !nextProps.modalStatus) {
      return { zip: nextProps.zipcode };
    }
    return null;
  }
  componentDidMount() {}
  handleSubmit = () => {
    let data = {
      zipcode: this.state.zip,
      mem_id: this.props.db_currentUser.mem_id,
      token: this.props.db_currentUser.token
    };
    this.props.updateZipcode(data);
  };
  render() {
    const { modalStatus, modalToggle, modalType } = this.props;
    const showModalContent =
      modalStatus && modalType === "zipcode"
        ? "ZipcodeModal-container text-roboto"
        : "ZipcodeModal-container text-roboto shrink";
    const loggedIn = !this.props.loginStatus ? (
      <Link className="ZipcodeModal-link text-small" to="#">
        Already have an account?
      </Link>
    ) : null;
    return (
      <div className={showModalContent}>
        <p className="text-semibold text-nunito mb-0">Enter your zip code</p>
        <p className="text-small">
          Check if your location is eligible for delivery
        </p>
        <div className="input-wrapper">
          <input
            className="input-full rounded input-grey text-center input-zip"
            type="text"
            pattern="[0-9]*"
            maxLength="5"
            value={this.state.zip}
            placeholder={this.state.placeholder}
            onFocus={e => (e.target.placeholder = "")}
            onChange={e => this.setState({ zip: e.target.value })}
          />
        </div>
        <FullButton
          color="white"
          classList="btn btn-full rounded btn-xen mb-0"
          btnText="Continue"
          action={this.handleSubmit}
        />

        <p>{loggedIn}</p>

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
export default ZipcodeModal;
