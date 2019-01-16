import React from "react";
import MissionBox from "./MissionBox.jsx";
import "../../css/MissionContainer.css";
export default class MissionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (id, mine) => {
    console.log(id);
    console.log(mine);
    if (mine) {
      this.props.router.push(`/edit-my-mission/mid=${id}`);
    } else {
      // this.props.router.push(`/edit-mission/mid=${id}`);
      return null;
    }
  };
  render() {
    const { missions } = this.props;
    return (
      <div className="MissionContainer-container">
        {missions.map((cat, i) => (
          <div className={"wholes" + " " + cat.creator} key={i}>
            <MissionBox
              mission={cat}
              imgSrc={
                cat.creator === this.props.currentUser.uid
                  ? this.props.users[0].img
                  : this.props.users[1].img
              }
              creator={cat.creator}
              mine={cat.creator === this.props.currentUser.uid ? true : false}
              users={this.props.users}
              currentUser={this.props.currentUser}
              router={this.props.router}
              handleClick={this.handleClick}
            />
          </div>
        ))}
      </div>
    );
  }
}
