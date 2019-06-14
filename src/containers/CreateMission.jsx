import React, { Component } from "react";
import { Animated } from "react-animated-css";
import "../css/CreateMissions.css";
import InputChild from "../components/Common/InputChild.jsx";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import FullButton from "../components/Common/FullButton.jsx";
class CreateMission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      title: "",
      desc: "",
      pvalue: undefined
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.modalToggle(true, "");
  }
  inputValueDetector = (e, tfor) => {
    this.setState({ [tfor]: e.target.value });
  };
  handleClick = () => {
    let data = {
      creator: this.state.user,
      title: this.state.title,
      descr: this.state.desc,
      pvalue: parseInt(this.state.pvalue)
    };
    if (
      data.creator === "" ||
      data.title === "" ||
      data.pvalue === "" ||
      isNaN(data.pvalue)
    ) {
      this.props.notificationToggle({
        currentlyShowing: false,
        msg: "Mission is invalid. Please check all fields.",
        type: "warning"
      });
    } else {
      this.props.createNewMission(data);
    }
  };
  handleBack = () => {
    this.props.router.push("/missions");
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.router !== prevState.router) {
      return { user: nextProps.params.user };
    }
    return null;
  }
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
          <SectionHeader title={"Create New Mission - " + this.state.user} />
          <div className="FormHolder">
            <InputChild
              inputValueDetector={this.inputValueDetector}
              value={this.state.title}
              type="text"
              tfor="title"
              placeholder="Title"
            />
            <InputChild
              inputValueDetector={this.inputValueDetector}
              value={this.state.desc}
              type="text"
              tfor="desc"
              placeholder="Description"
            />
            <InputChild
              inputValueDetector={this.inputValueDetector}
              value={this.state.pvalue}
              type="number"
              tfor="pvalue"
              placeholder="Value (&hearts;)"
            />
            <FullButton
              color="white"
              classList="btn btn-full rounded btn-xen"
              btnText="Submit"
              action={this.handleClick}
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
export default CreateMission;
