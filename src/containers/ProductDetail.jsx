import React, { Component } from "react";
import { Animated } from "react-animated-css";
// import FullButton from "../components/Common/FullButton.jsx";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import FeaturedContainer from "../components/Common/FeaturedContainer.jsx";
import ProductImageCarousel from "../components/ProductDetail/ProductImageCarousel.jsx";
import ProductInfo from "../components/ProductDetail/ProductInfo.jsx";
import ProductDescription from "../components/ProductDetail/ProductDescription.jsx";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "https://placehold.it/250x250?text=Product",
      pid: [],
      productDetail: { imgSrc: "https://placehold.it/250x250?text=Product" }
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    // const currentLocation = this.props.router.params.cat;
    // const currentProduct = this.props.router.params.pid;
    this.props.modalToggle(true, "");
    // this.props.getProductDetail();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.router !== prevState.router) {
      return { pid: nextProps.params.pid };
    }
    return null;
  }
  render() {
    // let item = this.state.productDetail;
    return (
      <Animated
        animationIn="fadeInLeft"
        style={{
          animationDuration: "0.5s",
          msAnimationDuration: "0.5s",
          WebkitAnimationDuration: "0.5s",
          MozAnimationDuration: "0.5s",
          OAnimationDuration: "0.5s"
        }}
      >
        <div className="Product-content">
          <ProductImageCarousel image={this.state.productDetail.imgSrc} />
          <ProductInfo />

          <SectionHeader title="Description" />
          <ProductDescription {...this.props} />
          <SectionHeader title="Often Bought With" />
          <FeaturedContainer {...this.props} />
        </div>
      </Animated>
    );
  }
}
export default ProductDetail;
