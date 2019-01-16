import React from "react";
import "../../css/Scoreboard.css";
class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: ""
    };
  }
  componentDidMount() {
    console.log(this.props.currentUser.uid, this.props.currentUser.email);
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.categories !== prevState.featuredData) {
  //     return { featuredData: nextProps.categories };
  //   }
  //   return null;
  // }
  render() {
    const currentUser = this.props.currentUser.uid;

    return (
      <div className={"Scoreboard-holder " + this.props.customClass}>
        <div className="score-holder">
          <img
            className="avatar-gif"
            src="assets/images/home/nh.gif"
            alt="prof-avatar"
          />
          <span className="score">1000&hearts;</span>
        </div>
        <div id="separator">|</div>
        <div className="score-holder">
          <span className="score">1100&hearts;</span>
          <img
            className="avatar-gif"
            src="assets/images/home/ch.gif"
            alt="prof-avatar"
          />
        </div>
      </div>
    );
  }
}
export default Scoreboard;
