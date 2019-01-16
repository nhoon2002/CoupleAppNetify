import React, { Component } from "react";
import { Animated } from "react-animated-css";

import Countdowner from "../components/Common/Countdowner.jsx";
import Scoreboard from "../components/Common/Scoreboard.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: ["/assets/images/noel.jpg", "https://placehold.it/1920x1080"],
      loggedIn: false
      // readyToRender: false,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loginStatus !== prevState.loginStatus) {
      return { loggedIn: nextProps.loginStatus };
    }
    return null;
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.modalToggle(true, "");
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
  render() {
    const loggedIn = this.state.loggedIn;
    const loggedInContent = (
      <div className="Home-content">
        <Countdowner imgSrc={this.state.imgSrc[0]} />
        <Scoreboard customClass="" currentUser={this.props.db_currentUser} />
      </div>
    );
    const guestContent = (
      <div className="Home-content">
        <img
          src="https://placehold.it/500x500?text=Please+Log+In"
          alt="login-default"
        />
      </div>
    );
    return (
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        // isVisible={this.state.readyToRender}
      >
        {loggedIn ? loggedInContent : guestContent}
      </Animated>
    );
  }
}
export default Home;
