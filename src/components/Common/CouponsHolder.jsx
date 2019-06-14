import React from "react";
import CouponItem from "./CouponItem.jsx";
import "../../css/CouponsHolder.css";
export default class CouponsHolder extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="Coupon-holder-half">
        {categories.map((cat, i) => (
          <div
            className="coupon-item-wrapper"
            style={{
              background:
                "hsl(" +
                360 * Math.random() +
                "," +
                (25 + 70 * Math.random()) +
                "%," +
                (85 + 10 * Math.random()) +
                "%)"
            }}
            key={i}
          >
            <CouponItem
              couponName={cat.name}
              couponOwner={this.props.owner}
              router={this.props.router}
            />
          </div>
        ))}
      </div>
    );
  }
}
