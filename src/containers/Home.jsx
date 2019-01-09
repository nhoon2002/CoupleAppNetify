import React, { Component } from "react";
import { Animated } from "react-animated-css";
// import SectionHeader from "../components/Common/SectionHeader.jsx";
// import FeaturedContainer from "../components/Common/FeaturedContainer.jsx";
// import MissionContainer from "../components/Common/MissionContainer.jsx";
import Countdowner from "../components/Common/Countdowner.jsx";
import Scoreboard from "../components/Common/Scoreboard.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: ["/assets/images/noel.jpg", "https://placehold.it/1920x1080"],
      readyToRender: false
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.modalToggle(true, "");
    this.props.getCategories();
    // setTimeout(
    //   () =>
    //     this.props.notificationToggle({
    //       currentlyShowing: false,
    //       msg: "Welcome to eZion Market!",
    //       type: "success"
    //     }),
    //   2000
    // );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.categories !== prevState.categories) {
      return { categories: nextProps.categories, readyToRender: true };
    }
    return null;
  }
  render() {
    return (
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={this.state.ready}
      >
        <div className="Home-content">
          {/* <HomeBanner imgSrc={this.state.imgSrc} />
          <SectionHeader title="Recent Coupon" />
          <FeaturedContainer {...this.props} />
          <SectionHeader title="Recent Coupons" />
          <MissionContainer categories={items} router={this.props.router} /> */}
          <Countdowner imgSrc={this.state.imgSrc[0]} />
          <Scoreboard />
        </div>
      </Animated>
    );
  }
}
export default Home;
