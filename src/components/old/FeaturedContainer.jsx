import React from "react";
import FeatureCard from "./FeatureCard.jsx";
import "../../css/FeaturedContainer.css";
class FeaturedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], featuredData: [] };
  }
  componentDidMount() {}
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.categories !== prevState.featuredData) {
      return { featuredData: nextProps.categories };
    }
    return null;
  }
  render() {
    return (
      <div className="featured-carousel">
        {this.state.featuredData.map((dat, i) => (
          <FeatureCard
            key={dat.c_id}
            id={dat.c_id}
            imgSrc={"https://placehold.it/300x300"}
            price={dat.value}
            title={dat.name}
            description={dat.desc}
            currentUser={this.props.db_currentUser}
            addToCart={this.props.addToCart}
          />
        ))}
      </div>
    );
  }
}
export default FeaturedContainer;
