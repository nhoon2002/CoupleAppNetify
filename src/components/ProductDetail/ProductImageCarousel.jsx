import React from "react";
import "../../css/ProductImageCarousel.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
export default class ProductImageCarousel extends React.Component {
  render() {
    return (
      <div className="ProductImageCarousel-container">
        <Carousel showStatus={false} showIndicators={false}>
          <div>
            <img
              src="https://placehold.it/1200x800?text=Test1"
              alt="placehold"
            />
          </div>
          <div>
            <img
              src="https://placehold.it/200x200?text=Test2"
              alt="placehold"
            />
          </div>
          <div>
            <img
              src="https://placehold.it/200x200?text=Test3"
              alt="placehold"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
