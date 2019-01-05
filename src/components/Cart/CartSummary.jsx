import React from "react";
import "../../css/CartSummary.css";
import FullButton from "../Common/FullButton.jsx";

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 1 };
  }
  render() {
    const remaining = parseFloat(50 - this.props.subtotal).toFixed(2);
    return (
      <div className="cartSummary-container">
        <table className="cartSummary-table">
          <tbody>
            <tr>
              <td>Subtotal ({this.props.length} items)</td>
              <td>${this.props.subtotal}</td>
            </tr>
            <tr>
              <td className="green">
                Add ${remaining} more for FREE Delivery <span>&#9432;</span>
              </td>
              <td className="green">-$4.00</td>
            </tr>
          </tbody>
        </table>
        <FullButton
          // icon={faFacebookSquare}
          classList="btn btn-full btn-xen rounded"
          btnText="CHECKOUT"
          action={() => this.props.router.push("checkout")}
        />
      </div>
    );
  }
}
