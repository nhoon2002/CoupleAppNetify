import React from "react";
import AddToCart from "../Common/AddToCart.jsx";
import "../../css/FeatureCard.css";
const FeatureCard = props => (
  <div className="feature-card">
    <div className="feature-card-content">
      <span className="delivery-tag">Delivery Only</span>
      <img className="fullwidthImg" src={props.imgSrc} alt="placeholder" />
      <p className="bold-title">{props.price + " coins"}</p>
      <span className="title-tag">{props.title}</span>
      <div className="description-tag-holder">
        <span className="description-tag">{props.description}</span>
      </div>
      <span className="weight-tag">{props.weight + " " + props.perunit}</span>
      <AddToCart
        c_id={props.id}
        addToCart={props.addToCart}
        currentUser={props.currentUser}
      />
    </div>
  </div>
);

export default FeatureCard;
