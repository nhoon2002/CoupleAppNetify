import React from "react";
import "../../css/MissionBox.css";
const MissionBox = props => (
  <div
    className="MissionBox-container"
    onClick={() => props.handleClick(props.mission.m_id, props.mine)}
  >
    <div className="MissionBox-img-holder">
      <img src={props.imgSrc} alt="placeholder" className="catImg" />
    </div>
    <div className="MissionBox-content">{props.mission.title}</div>
    <div className="MissionBox-price-box">{props.mission.pvalue}&hearts;</div>
  </div>
);
export default MissionBox;
