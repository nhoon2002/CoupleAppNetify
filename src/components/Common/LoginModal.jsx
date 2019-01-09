import React from "react";
// import { Link } from "react-router";
import FullButton from "./FullButton.jsx";
import InputChild from "./InputChild.jsx";
import "../../css/LoginModal.css";
// import { faGoogle, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  componentDidMount() {}
  handleLog = () => {
    let data = this.state;
    this.props.SigninLocal(data.email, data.password);
  };

  inputValueDetector = (e, type) => {
    this.setState({ [e.target.type]: e.target.value });
  };

  render() {
    const { modalStatus, modalToggle, modalType } = this.props;
    const showModalContent =
      modalStatus && modalType === "login"
        ? "LoginModal-container"
        : "LoginModal-container shrink";
    return (
      <div className={showModalContent}>
        <InputChild
          inputValueDetector={this.inputValueDetector}
          value={this.state.email}
          type="email"
          placeholder="Email address"
        />
        <InputChild
          inputValueDetector={this.inputValueDetector}
          value={this.state.password}
          type="password"
          placeholder="Password"
        />

        <FullButton
          color="white"
          classList="btn btn-full rounded btn-xen"
          btnText="Log in"
          action={this.handleLog}
        />

        <div
          className="close-modal log-close"
          onClick={() => modalToggle(true, "")}
        >
          <span>&times;</span>
        </div>
      </div>
    );
  }
}
export default LoginModal;
