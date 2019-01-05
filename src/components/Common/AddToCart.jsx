import React from "react";
class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  handleClick = () => {
    let data = {
      pro_id: this.props.c_id,
      mem_id: this.props.currentUser.uid,
      pro_quantity: 1
    };
    this.props.addToCart(data);
  };
  render() {
    return (
      <img
        id={this.props.c_id}
        className="addtoCart"
        width="25"
        src="/assets/images/icon-addtocart.png"
        alt="tocart"
        onClick={this.handleClick}
      />
    );
  }
}

export default AddToCart;
