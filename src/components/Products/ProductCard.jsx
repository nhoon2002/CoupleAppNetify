import React from "react";
import AddToCart from "../Common/AddToCart.jsx";
import "../../css/ProductCard.css";

const ProductCard = props => (
  <div className="halves">
    <div className="product-card">
      <div
        className="product-card-content"
        onClick={() => props.router.push(`/detail/${props.id}`)}
      >
        <span className="delivery-tag">{props.title}</span>
        {/* <span className="delivery-tag">Delivery Only</span> */}
        <img className="fullwidthImg" src={props.imgSrc} alt="placeholder" />
        <p className="bold-title">
          {props.price}
          <span className="price-unit-tag">{props.perunit}</span>
        </p>

        <div className="description-tag-holder">
          <span className="description-tag">{props.description}</span>
        </div>
        <span className="weight-tag">{props.weight}</span>
      </div>
      <AddToCart
        pid={props.id}
        addToCart={props.addToCart}
        currentUser={props.currentUser}
        refreshCart={props.getCart}
      />
      {/* <img
        className="addtoCart"
        width="25"
        src="/assets/images/icon-addtocart.png"
        alt="tocart"
      /> */}
    </div>
  </div>
);

export default ProductCard;
