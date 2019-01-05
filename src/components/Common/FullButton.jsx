import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class FullButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    if (this.props.action) {
      this.props.action();
    } else return false;
  };

  render() {
    const classList = this.props.classList;
    const icon = this.props.icon ? (
      <button onClick={this.handleClick} className={classList}>
        <div className="fullbtn-icon-holder">
          <FontAwesomeIcon
            color={this.props.color}
            style={{ verticalAlign: "middle", fontSize: "22px" }}
            icon={this.props.icon}
            size="2x"
          />
        </div>

        <span className="fullbtn-text-holder">{this.props.btnText}</span>
      </button>
    ) : (
      <button onClick={this.handleClick} className={classList}>
        {this.props.btnText}
      </button>
    );
    return icon;
  }
}
export default FullButton;
