import React from "react";
import "../../css/Scoreboard.css";
class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    console.log("mounted scoreboard");
    console.log(this.props.currentUsers, this.props.currentUsers);
  }

  render() {
    const currentUsers = this.props.currentUsers;

    return (
      <div className={"Scoreboard-holder " + this.props.customClass}>
        {currentUsers.map((user, index) => (
          <React.Fragment key={index}>
            <div className="score-holder">
              <img
                className="avatar-gif"
                src={user.scoreboard_gif}
                alt="prof-avatar"
              />
              <span className="score">{user.hearts}&hearts;</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
export default Scoreboard;
