import React from "react";
import { Animated } from "react-animated-css";
import SectionHeader from "../components/Common/SectionHeader.jsx";
import FeaturedContainer from "../components/Common/FeaturedContainer.jsx";
import ProductsContainer from "../components/Products/ProductsContainer.jsx";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentCat: "", show: false };
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.categories !== prevState.categories) {
  //     return { categories: nextProps.categories };
  //   }
  //   return null;
  // }
  componentDidMount() {
    window.scrollTo(0, 0);

    this.setState({ show: true });
    this.props.getCategories();

    // TODO: this.props.getFeatured(category)
  }
  componentWillUnmount() {
    this.setState({ show: false });
  }
  render() {
    return (
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={this.state.show}
      >
        <div className="Products-container">
          <SectionHeader title="All Coupons" />
          <ProductsContainer {...this.props} />
        </div>
      </Animated>
    );
  }
}
export default Products;
