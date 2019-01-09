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
      // imgSrc: "https://placehold.it/250x250?text=Product",
      user: [],
      title: "",
      desc: "",
      pvalue: ""

      // productDetail: { imgSrc: "https://placehold.it/250x250?text=Product" }
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.modalToggle(true, "");
  }
  inputValueDetector = (e, type) => {
    this.setState({ [e.target.type]: e.target.value });
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
              placeholder="Title"
            />
            <InputChild
              inputValueDetector={this.inputValueDetector}
              value={this.state.desc}
              type="text"
              placeholder="Description"
            />
            <InputChild
              inputValueDetector={this.inputValueDetector}
              value={this.state.pvalue}
              type="number"
              placeholder="Value (&hearts;)"
            />
            <FullButton
              color="white"
              classList="btn btn-full rounded btn-xen"
              btnText="Submit"
              action={() => this.props.router.push("/missions")}
            />
          </div>
        </div>
      </Animated>
    );
  }
}
export default CreateMission;
