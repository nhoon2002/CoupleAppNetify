import React from "react";
import "../../css/CartCard.css";

export default class CartCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 1, status: true };
  }
  handleClickDec = () => {
    this.setState(prevState => {
      if (prevState.qty > 1) {
        return { qty: prevState.qty - 1 };
      } else {
        return { qty: 1 };
      }
    });
  };
  handleClickInc = () => {
    this.setState(prevState => {
      return { qty: prevState.qty + 1 };
    });
  };
  handleRemove = () => {
    console.log("hi");
    let data = {
      car_id: this.props.id,
      mem_id: this.props.currentUserId
    };

    this.props.removal(data);
  };
  componentWillUnmount() {
    console.log("hi2");
    this.setState(prevState => {
      return { status: false };
    });
  }

  render() {
    const hider = this.state.status ? "cart-card" : "cart-card hidden";
    return (
      <div className={hider}>
        <div className="cart-card-content">
          <div
            className="cart-card-imgHolder"
            onClick={() => this.props.router.push(`/detail/${this.props.id}`)}
          >
            <img
              className="fullwidthImg"
              src={this.props.imgSrc}
              alt="placeholder"
            />
          </div>
          <div className="cart-card-text">
            <p
              className="title-tag cutter"
              onClick={() => this.props.router.push(`/detail/${this.props.id}`)}
            >
              {this.props.title.length > 48
                ? this.props.title.substring(0, 40).trim() + "..."
                : this.props.title}
            </p>

            <p className="weight-tag">{this.props.weight}</p>
            <p className="weight-tag green" onClick={this.handleRemove}>
              <span>&otimes;</span> Remove
            </p>
          </div>
          <div className="cart-card-right">
            <p className="bold-title">${this.props.price}</p>
            <div className="cart-card-qtyHolder">
              <div
                className="decrementQty qty-ctrl"
                onClick={this.handleClickDec}
              >
                -
              </div>
              <input
                className="cart-card-qty"
                name="cart-card-qty"
                value={this.state.qty}
                type="text"
                pattern="[0-9]*"
                maxLength="2"
                onChange={e => {
                  this.setState({ qty: e.target.value });
                }}
              />
              <div
                className="incrementQty qty-ctrl"
                onClick={this.handleClickInc}
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
