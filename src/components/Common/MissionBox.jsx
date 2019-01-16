import React from "react";
import "../../css/MissionBox.css";
const MissionBox = props => (
  <div
    className="MissionBox-container"
    // onClick={() => props.router.push(`/products/${props.categoryName}`)}
    onClick={() => console.log("clicked on MissionBox")}
  >
    <div className="MissionBox-img-holder">
      <img
        src={props.categoryImg || "https://placehold.it/90x90"}
        alt="placeholder"
        className="catImg"
      />
    </div>
    <div className="MissionBox-content">{props.title}</div>
    <div className="MissionBox-price-box">{props.pvalue}&hearts;</div>
  </div>
);
export default MissionBox;
