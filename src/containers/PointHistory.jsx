import React, { Component } from "react";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import PointsLog from "../components/Common/PointsLog.jsx";
import "../css/Mission.css";
import { Link } from "react-router";

class PointHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: []
    };
  }
  componentDidMount() {
    console.log("mountedPointHistory");
    window.scrollTo(0, 0);
    this.props.modalToggle(true, "");
    //Get categories
    this.props.getCompletedMissions();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.completed_missions !== prevState.completed_missions) {
      console.log("missions:-------------");

      return { missions: nextProps.completed_missions };
    }
    return null;
  }
  render() {
    let items = this.state.missions;

    return (
      <div className="Mission-content">
        <SectionHeader title="History" />
        <PointsLog
          missions={items}
          router={this.props.router}
          currentUser={this.props.db_currentUser}
          users={this.props.users}
        />
      </div>
    );
  }
}
export default PointHistory;
