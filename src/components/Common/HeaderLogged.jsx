import React, { Component } from "react";
import { Link } from "react-router";
import "../../css/HeaderAlt.css";
import HeaderInput from "./HeaderInput.jsx";
import LoginModal from "./LoginModal.jsx";
import ZipcodeModal from "./ZipcodeModal.jsx";
import ProfileModal from "./ProfileModal.jsx";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { modalStatus: false };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.modalStatus !== prevState.modalStatus) {
      return { modalStatus: nextProps.modalStatus };
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
                  src="/assets/images/icon-category.png"
                  alt="login"
                />
              ) : (
                <img
                  className="zp-img zp-icon hamburger"
                  src="/assets/images/icon-category-disabled.png"
                  alt="login"
                />
              )}
            </div>
            <div className="zp-icon-holder">
              <img
                className="zp-img zp-icon login"
                src="/assets/images/icon-user.svg"
                // src="/assets/images/icon-login.png"
                alt="login"
                onClick={() =>
                  this.props.modalToggle(this.state.modalStatus, "profile")
                }
              />
            </div>
            <div
              className="zp-icon-holder"
              onClick={() => this.props.router.push("/coupons")}
            >
              <img
                className="zp-img zp-icon zipcode"
                src="/assets/images/icon-zipcode.png"
                alt="login"
              />
            </div>
            <div className="zp-icon-holder">
              <img
                className="zp-img zp-icon cart"
                src="/assets/images/icon-cart.png"
                alt="login"
                onClick={() => this.props.router.push("/cart")}
              />
            </div>
          </div>
          <div className="Mid-span-holder">
            <div className="zp-span-holder">
              <span className="zp-cattext">Missions</span>
            </div>
            <div className="zp-span-holder">
              <span className="zp-cattext">Profile</span>
            </div>
            <div className="zp-span-holder">
              {/* <span className="zp-cattext">{this.props.zipcode}</span> */}
              <span className="zp-cattext">Coupons</span>
            </div>
            <div className="zp-span-holder">
              <span className="zp-cattext">Cart</span>
            </div>
          </div>
        </div>
        <LoginModal {...this.props} />
        <ProfileModal {...this.props} />
        <ZipcodeModal {...this.props} />
      </div>
    );
  }
}
