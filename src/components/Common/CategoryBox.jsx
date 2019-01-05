import React from "react";
import "../../css/CategoryBox.css";
const CategoryBox = props => (
  <div
    className="CategoryBox-container"
    onClick={() => props.router.push(`/products/${props.categoryName}`)}
  >
    <div className="CategoryBox-img-holder">
      <img
        src={props.categoryImg || "https://placehold.it/90x90"}
        alt="placeholder"
        className="catImg"
      />
    </div>
    <div className="CategoryBox-content">This is the name of the mission.</div>
    <div className="CategoryBox-price-box">200&hearts;</div>
  </div>
);
export default CategoryBox;
