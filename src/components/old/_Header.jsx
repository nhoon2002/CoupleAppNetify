import React, { Component } from "react";
import { Link } from "react-router";
import "../../css/Header.css";
import HeaderInput from "./HeaderInput.jsx";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Header-container">
        <div className="Top-bar">
          <img
            className="zp-img zp-icon login"
            src="/assets/images/icon-login.png"
            alt="login"
          />
          <Link to="/">
            <img
              className="zp-img zp-logo"
              src="/assets/images/logo.png"
              alt="logo"
            />
          </Link>
          <img
            className="zp-img zp-icon cart"
            src="/assets/images/icon-cart.png"
            alt="login"
          />
        </div>
        <div className="Mid-bar">
          <img
            className="zp-img zp-icon hamburger"
            src="/assets/images/icon-hamburger.png"
            alt="login"
          />
          <img
            className="zp-img zp-icon zipcode"
            src="/assets/images/icon-zipcode.png"
            alt="login"
          />
        </div>
      </div>
    );
  }
}
