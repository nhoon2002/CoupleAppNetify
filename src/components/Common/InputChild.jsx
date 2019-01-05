import React, { Component } from "react";

class InputChild extends Component {
  render() {
    return (
      <div className="input-wrapper">
        <input
          className="input-full text-small rounded input-grey"
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onFocus={e => (e.target.placeholder = "")}
          onChange={e => this.props.inputValueDetector(e, this.props.type)}
        />
      </div>
    );
  }
}

export default InputChild;
