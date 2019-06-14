import React from "react";
import FullButton from "./FullButton.jsx";
import "../../css/PointsLog.css";
export default class PointsLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleBack = () => {
    this.props.router.push("/missions");
  };
  render() {
    const { missions } = this.props;

    return (
      <div className="PointsLog-container">
        {missions.map((cat, i) => (
          <div className={"wholes" + " " + cat.creator} key={i}>
            {this.props.currentUser.uid == cat.creator ? (
              <div>
                You gave {cat.pvalue}&hearts; for completing '{cat.title}'
              </div>
            ) : (
              <div>
                You earned {cat.pvalue}&hearts; for completing '{cat.title}'
              </div>
            )}
          </div>
        ))}
        <FullButton
          color="white"
          classList="btn btn-full rounded btn-fb"
          btnText="Go Back"
          action={this.handleBack}
        />
      </div>
    );
  }
}
