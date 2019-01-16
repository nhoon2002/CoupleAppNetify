import React, { Component } from "react";
import { Link } from "react-router";
import "../../css/HeaderAlt.css";
// import HeaderInput from "./HeaderInput.jsx";
import LoginModal from "./LoginModal.jsx";
import ZipcodeModal from "./ZipcodeModal.jsx";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { modalStatus: false, type: "" };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.modalStatus !== prevState.modalStatus) {
      return { modalStatus: nextProps.modalStatus, type: nextProps.modalType };
    }
    return null;
  }
  render() {
    const currentRoute = this.props.router.location.pathname;
    return (
      <div className="Header-container">
        <div className="Top-bar">
          <Link to="/">
            <img
              className="zp-img zp-logo"
              src="/assets/images/logonhch.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="Mid-bar">
          <div className="Mid-img-holder">
            <div
              className="zp-icon-holder"
              onClick={() => this.props.router.push("/missions")}
            >
              {currentRoute === "/missions" ? (
                <img
                  className="zp-img zp-icon hamburger"
                  src="/assets/images/fa/tasks.svg"
                  alt="mission"
                />
              ) : (
                <img
                  className="zp-img zp-icon hamburger"
                  src="/assets/images/fa/tasks.svg"
                  alt="mission"
                />
              )}
            </div>
            <div className="zp-icon-holder">
              <img
                className="zp-img zp-icon zipcode"
                src="/assets/images/fa/hand-holding-heart.svg"
                alt="zipcode"
                onClick={() => this.props.router.push("/coupons")}
              />
            </div>
            <div className="zp-icon-holder cart">
              <img
                className="zp-img zp-icon cart"
                src="/assets/images/fa/calendar-check.svg"
                alt="calendar"
              />
            </div>
            <div
              className="zp-icon-holder login"
              onClick={() =>
                this.props.modalToggle(this.state.modalStatus, "login")
              }
            >
              {this.state.type === "login" ? (
                <img
                  className="zp-img zp-icon login"
                  src="/assets/images/fa/lock.svg"
                  alt="login"
                />
              ) : (
                <img
                  className="zp-img zp-icon login"
                  src="/assets/images/fa/lock.svg"
                  alt="login"
                />
              )}
            </div>
          </div>
          <div className="Mid-span-holder">
            <div className="zp-span-holder">
              <span className="zp-cattext">Missions</span>
            </div>
            <div className="zp-span-holder">
              <span className="zp-cattext">Coupons</span>
            </div>
            <div className="zp-span-holder">
              <span className="zp-cattext">Calendar</span>
            </div>
            <div className="zp-span-holder">
              <span className="zp-cattext">Log in</span>
            </div>
          </div>
        </div>

        <LoginModal {...this.props} />
        <ZipcodeModal {...this.props} />
      </div>
    );
  }
}
export default Header;
