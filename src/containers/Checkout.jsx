import React from "react";
import "../css/Checkout.css";
import SectionHeader from "../components/Common/SectionHeader.jsx";
// import FullButton from "../components/Common/FullButton.jsx";
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentCat: "", show: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const currentLocation = this.props.router.params.cat;
    // TODO: make request to api for populating content.
    this.setState({ currentCat: currentLocation, show: true });
  }
  componentWillUnmount() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="Checkout-container">
        <SectionHeader title={"Delivery / Shipping Address"} />
        {/* <CheckoutAddress/> */}
        <SectionHeader title={"Delivery Time"} />
        {/* <CheckoutDeliveryTime/> */}
        <SectionHeader title={"Mobile Number"} />
        {/* <CheckoutMobile/> */}
        <SectionHeader title={"Payment Method"} />
        {/* <CheckoutPayment/> */}
        {/* <CheckoutDrawer /> */}
      </div>
    );
  }
}
export default Checkout;
