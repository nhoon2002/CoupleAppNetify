import React from "react";
// import FeatureCard from "./FeatureCard.jsx";
import "../../css/Countdowner.css";
class Countdowner extends React.Component {
  constructor(props) {
    super(props);
    let d2 = new Date();
    let t2 = d2.getTime();
    let t1 = new Date("December 5, 2015").getTime();
    let date = parseInt((t2 - t1) / (24 * 3600 * 1000));

    this.state = {
      date: date
    };
  }
  componentDidMount() {}
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.categories !== prevState.featuredData) {
  //     return { featuredData: nextProps.categories };
  //   }
  //   return null;
  // }
  render() {
    return (
      <div
        className="Countdowner-holder"
        style={{ backgroundImage: `url(${this.props.imgSrc})` }}
      >
        <div className="avatar-holder">
          <img class="avatar-circles" src="https://placehold.it/150x150" />
          <img id="heart-symbol" src="assets/images/home/love2.png" />

          <img class="avatar-circles" src="https://placehold.it/150x150" />
        </div>

        <div className="countdown-content">
          <span id="countdown-number">{this.state.date}</span>

          <p>...Days since December 5, 2015</p>
        </div>
      </div>
    );
  }
}
export default Countdowner;
