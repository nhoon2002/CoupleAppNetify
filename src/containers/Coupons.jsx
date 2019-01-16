import React, { Component } from "react";
import Scoreboard from "../components/Common/Scoreboard.jsx";
import CouponsHolder from "../components/Common/CouponsHolder.jsx";
import "../css/Coupons.css";

class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coupons: []
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.modalToggle(true, "");
    //Get coupons
    this.props.getCoupons();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.coupons !== prevState.coupons) {
      return { coupons: nextProps.coupons };
    }
    return null;
  }
  render() {
    let items = this.state.coupons;
    return (
      <div className="Coupons-container">
        <Scoreboard customClass="mini-size" />
        <div className="Coupons-holder">
          <CouponsHolder categories={items} router={this.props.router} />
          <CouponsHolder
            categories={items}
            owner={"nh"}
            router={this.props.router}
          />
        </div>
      </div>
    );
  }
}
export default Coupons;
