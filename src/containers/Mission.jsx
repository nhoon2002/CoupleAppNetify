import React, { Component } from "react";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import MissionContainer from "../components/Common/MissionContainer.jsx";
import "../css/Mission.css";
import { Link } from "react-router";

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "https://placehold.it/1920x740?text=Main+Banner",
      missions: []
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.modalToggle(true, "");
    //Get categories
    this.props.getMissions();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.missions !== prevState.missions) {
      return { missions: nextProps.missions };
    }
    return null;
  }
  render() {
    let items = this.state.missions;
    return (
      <div className="Mission-content">
        <button className="add-new-mission">
          <Link to="/create-mission/nh">+</Link>
        </button>
        <SectionHeader title="Missions" />
        <MissionContainer categories={items} router={this.props.router} />
      </div>
    );
  }
}
export default Mission;
