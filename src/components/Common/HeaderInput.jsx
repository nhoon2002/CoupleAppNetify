import React, { Component } from "react";

export default class HeaderInput extends Component {
  constructor(props) {
    super(props);

    this.state = { query: "" };
  }

  handleChange = () => {
    this.setState({ query: this.search.value });
  };
  render() {
    return (
      <div className="inputbox">
        <img
          className="zp-icon search"
          src={this.props.icon}
          alt="searchIcon"
        />
        <input
          className="Header-input"
          type="text"
          onChange={this.handleChange}
          ref={input => (this.search = input)}
        />
      </div>
    );
  }
}
