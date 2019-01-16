import React from "react";
import "../../css/CouponItem.css";
const CouponItem = props => (
  <div className="coupon-card">{props.couponName}</div>
);

export default CouponItem;
