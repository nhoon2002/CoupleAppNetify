import React from "react";
import MissionBox from "./MissionBox.jsx";
import "../../css/MissionContainer.css";
export default class MissionContainer extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="MissionContainer-container">
        {categories.map((cat, i) => (
          <div className="wholes" key={i}>
            <MissionBox
              title={cat.title}
              desc={cat.descr}
              creator={cat.creator}
              pvalue={cat.value}
              router={this.props.router}
            />
          </div>
        ))}
      </div>
    );
  }
}
