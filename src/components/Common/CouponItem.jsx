import React from "react";
import AddToCart from "../Common/AddToCart.jsx";
import "../../css/CouponItem.css";
const CouponItem = props => (
  <div className="coupon-card">{props.couponName}</div>
);

export default CouponItem;
