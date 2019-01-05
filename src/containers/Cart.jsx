import React, { Component } from "react";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import CartCard from "../components/Cart/CartCard.jsx";
import CartSummary from "../components/Cart/CartSummary.jsx";
import FeaturedContainer from "../components/Common/FeaturedContainer.jsx";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      cart: [],
      mem_id: "",
      subtotal: 0,
      rerender: false
    };
  }
  componentDidMount() {
    if (this.props.db_currentUser) {
      this.props.getCart(this.props.db_currentUser);
      //TODO: Call for Related Products data, pass to featuredContainer
    }
    window.scrollTo(0, 0);
    this.props.modalToggle(true, ""); //Close modal if open;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.cart !== prevState.cart) {
      console.log("updating cart from Cart.jsx");
      let tot = 0;
      for (let i = 0; i < nextProps.cart.length; i++) {
        tot += parseFloat(nextProps.cart[i].pro_price);
      }
      return { cart: nextProps.cart, subtotal: tot.toFixed(2) }; //Round to nearest cent
    }
    if (nextProps.db_currentUser && prevState.cart.length === 0) {
      // Once a user is registered and received, call for updating the cart.
      nextProps.getCart(nextProps.db_currentUser);
      return { mem_id: nextProps.db_currentUser.mem_id };
    }
    return null;
  }
  removal = data => {
    this.props.removeFromCart(data);
    this.setState(prevState => {
      return { rerender: !prevState.rerender };
    });
  };

  render() {
    let items = this.state.cart;

    const cards = items.map((item, i) => (
      <CartCard
        key={i}
        id={item.car_id}
        imgSrc={item.pro_thumbnail}
        title={item.pro_name}
        weight="10oz"
        price={item.pro_price}
        qty={item.pro_quantity}
        router={this.props.router}
        currentUserId={this.props.db_currentUser.mem_id}
        removal={this.removal}
      />
    ));

    return (
      <div className="Cart-content">
        <SectionHeader title={"Your Cart (" + items.length + " items)"} />
        {cards}
        <SectionHeader title="Cart Summary" />
        <CartSummary
          subtotal={this.state.subtotal}
          length={this.state.cart.length}
          router={this.props.router}
        />
        <SectionHeader title="Add Related Products" />
        <FeaturedContainer {...this.props} />
      </div>
    );
  }
}
export default Cart;
