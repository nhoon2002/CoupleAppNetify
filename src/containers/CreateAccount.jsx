import React from "react";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import FullButton from "../components/Common/FullButton.jsx";
import "../css/CreateAccount.css";
export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 0,
      is_social: 0,
      user_origin: 2,
      // user_first: "",
      // user_last: "",
      user_email: "",
      user_pw: "",
      user_pw2: "",
      user_zipcode: ""
    };
  }
  componentDidMount() {
    this.props.modalToggle(true, "login");
  }
  handleClick = () => {
    const okay = Object.values(this.state);
    for (let i = 0; i < okay.length; i++) {
      if (okay[i].length === 0) {
        return false;
      }
    }
    if (
      this.state.user_pw !== this.state.user_pw2 ||
      this.state.user_pw.length === 0
    ) {
      this.props.notificationToggle({
        currentlyshowing: false,
        msg: "Please check to make sure you've confirmed your password",
        type: "danger"
      });
      return false;
    }
    this.props.sendUser(this.state, "");
  };
  render() {
    return (
      <div className="CreateAccount-container">
        <SectionHeader title="Create a New Account" />
        <div className="CreateAccount-inputsHolder">
          <div className="input-wrapper">
            <input
              className="input-full text-small rounded input-grey"
              type="email"
              placeholder="Email address"
              value={this.state.user_email}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => {
                e.target.placeholder = "Email address";
              }}
              onChange={e => this.setState({ user_email: e.target.value })}
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-full text-small rounded input-grey"
              type="password"
              placeholder="Password"
              value={this.state.user_pw}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => {
                e.target.placeholder = "Password";
              }}
              onChange={e => this.setState({ user_pw: e.target.value })}
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-full text-small rounded input-grey"
              type="password"
              placeholder="Confirm Password"
              value={this.state.user_pw2}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => {
                e.target.placeholder = "Confirm Password";
              }}
              onChange={e => this.setState({ user_pw2: e.target.value })}
            />
          </div>
          {/* <div className="input-wrapper">
            <input
              className="input-full text-small rounded input-grey"
              type="text"
              placeholder="First Name"
              value={this.state.user_first}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => {
                e.target.placeholder = "First Name";
              }}
              onChange={e => this.setState({ user_first: e.target.value })}
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-full text-small rounded input-grey"
              type="text"
              placeholder="Last Name"
              value={this.state.user_last}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => {
                e.target.placeholder = "Last Name";
              }}
              onChange={e => this.setState({ user_last: e.target.value })}
            />
          </div> */}
          <div className="input-wrapper">
            <input
              className="input-full text-small rounded input-grey"
              placeholder="Zipcode"
              type="text"
              pattern="[0-9]*"
              maxLength="5"
              value={this.state.user_zip}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => {
                e.target.placeholder = "Zipcode";
              }}
              onChange={e => this.setState({ user_zipcode: e.target.value })}
            />
          </div>
          <FullButton
            action={this.handleClick}
            classList="btn btn-full rounded btn-xen"
            btnText="Create Account"
          />
        </div>
      </div>
    );
  }
}
