import React from "react";
import ProfileAvatar from "./ProfileAvatar.jsx";
// import VideoBg from "./VideoBg.jsx";
import "../../css/Countdowner.css";
class Countdowner extends React.Component {
  constructor(props) {
    super(props);
    let d2 = new Date();
    let t2 = d2.getTime();
    let t1 = new Date("December 5, 2015").getTime();
    let date = parseInt((t2 - t1) / (24 * 3600 * 1000));

    this.state = {
      date: date,
      users: []
    };
  }
  componentDidMount() {}
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let changes = {};
  //   if (nextProps.currentUsers !== prevState.users) {
  //     changes.users = nextProps.currentUsers;
  //   }
  //   return changes || null;
  // }
  render() {
    const currentUsers = this.props.currentUsers;
    return (
      <div
        className="Countdowner-holder"
        style={{
          backgroundImage: "url(assets/images/bg/vegas.jpeg)",
          backgroundPosition: "bottom right",
          backgroundSize: "cover"
        }}
      >
        {/* <VideoBg /> */}
        <div className="avatar-holder">
          <ProfileAvatar
            className="avatar-circles"
            imgSrc={currentUsers[0] ? currentUsers[0].img : null}
          />
          <img
            id="heart-symbol"
            src="assets/images/home/love2.png"
            alt="default"
          />
          <ProfileAvatar
            className="avatar-circles"
            imgSrc={currentUsers[1] ? currentUsers[1].img : null}
          />
        </div>

        <div className="countdown-content">
          <span id="countdown-number">{this.state.date}</span>

          <p>...days since December 5, 2015</p>
        </div>
      </div>
    );
  }
}
export default Countdowner;
