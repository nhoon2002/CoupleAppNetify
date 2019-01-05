import React from "react";
import ProductCard from "./ProductCard.jsx";
import "../../css/ProductsContainer.css";
class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {}
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.categories !== prevState.categories) {
      return { products: nextProps.categories };
    }
    return null;
  }

  render() {
    return (
      <div className="ProductsContainer-container">
        {this.state.products.map((index, i) => (
          <ProductCard
            imgSrc={"https://placehold.it/300x300"}
            id={index.pro_id}
            key={i}
            price={index.value + " coins"}
            title={index.name}
            description={index.desc}
            router={this.props.router}
            addToCart={this.props.addToCart}
            currentUser={this.props.db_currentUser}
          />
        ))}
      </div>
    );
  }
}
export default ProductsContainer;
