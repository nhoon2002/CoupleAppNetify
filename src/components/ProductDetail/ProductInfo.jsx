import React from "react";
import FullButton from "../Common/FullButton.jsx";
import "../../css/ProductInfo.css";
export default class ProductInfo extends React.Component {
  render() {
    return (
      <div className="ProductInfo-container">
        <span className="delivery-tag">Dairy & Eggs > Yogurt</span>
        <p className="product-title-tag">
          Chobani Flip Special Peanut Butter Dream &nbsp;
          <span className="weight-tag">5 oz</span>
        </p>
        <p className="product-price-tag">
          <span className="price">$1.99</span>
          <span className="unit">each</span>
          <span className="msrp">$2.99</span>
        </p>

        <FullButton
          color="white"
          classList="btn btn-full rounded btn-xen text-bold"
          btnText="Add To Cart"
        />
        <p className="product-fineprint">
          This item is not avavilable for shipping
        </p>
      </div>
    );
  }
}
