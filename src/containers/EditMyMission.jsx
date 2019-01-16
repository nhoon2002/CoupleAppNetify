import React, { Component } from "react";
import { Animated } from "react-animated-css";
import "../css/CreateMissions.css";
import InputChild from "../components/Common/InputChild.jsx";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import FullButton from "../components/Common/FullButton.jsx";
class EditMyMission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m_id: undefined,
      mission: {}
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.modalToggle(true, "");
    this.props.getOneMission(this.props.router.params.mid);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.mission !== prevState.mission) {
      return { m_id: nextProps.router.params.mid, mission: nextProps.mission };
    }
    if (nextProps.router !== prevState.router) {
      return { m_id: nextProps.router.params.mid, mission: nextProps.mission };
    }
    return null;
  }

  handleClick = () => {
    let data = {
      m_id: parseInt(this.state.mission.m_id),
      creator: this.state.mission.creator,
      pvalue: parseInt(this.state.mission.pvalue)
    };
    if (data.creator === "" || isNaN(data.pvalue) || data.pvalue === 0) {
      this.props.notificationToggle({
        currentlyShowing: false,
        msg: "Invalid. Please check all fields.",
        type: "warning"
      });
    } else {
      this.props.missionSucceeded(data);
    }
  };
  handleDelete = () => {
    let data = {
      m_id: parseInt(this.state.mission.m_id)
    };
    if (isNaN(data.m_id)) {
      this.props.notificationToggle({
        currentlyShowing: false,
        msg: "Invalid. Please try again later.",
        type: "warning"
      });
    } else {
      this.props.deleteMission(data);
    }
  };
  handleBack = () => {
    this.props.router.push("/missions");
  };

  render() {
    // let item = this.state.productDetail;
    return (
      <Animated
        animationIn="fadeInLeft"
        style={{
          animationDuration: "0.5s",
          msAnimationDuration: "0.5s",
          WebkitAnimationDuration: "0.5s",
          MozAnimationDuration: "0.5s",
          OAnimationDuration: "0.5s"
        }}
      >
        <div className="CreateMission-content">
          <SectionHeader title={"Mission Status"} />
          <div className="FormHolder">
            <p>
              <strong>Title</strong>: {this.state.mission.title}
            </p>
            <p>
              <strong>Description</strong>: {this.state.mission.descr}
            </p>
            <p>
              <strong>Value</strong>: {this.state.mission.pvalue}
            </p>
            <FullButton
              color="white"
              classList="btn btn-full rounded btn-xen"
              btnText="Mission Success!"
              action={this.handleClick}
            />
            <FullButton
              color="white"
              classList="btn btn-full rounded btn-google"
              btnText="Delete Mission"
              action={this.handleDelete}
            />
            <FullButton
              color="white"
              classList="btn btn-full rounded btn-fb"
              btnText="Go Back"
              action={this.handleBack}
            />
          </div>
        </div>
      </Animated>
    );
  }
}
export default EditMyMission;
