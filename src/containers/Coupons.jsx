import React, { Component } from "react";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import CategoryContainer from "../components/Common/CategoryContainer.jsx";

class Mission extends Component {
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
      <div className="Mission-content">
        <button className="add-new-coupon">+</button>
        <SectionHeader title="Coupons" />
        <CategoryContainer categories={items} router={this.props.router} />
      </div>
    );
  }
}
export default Mission;
