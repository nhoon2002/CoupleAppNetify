import React from "react";
import "../../css/ProductImageCarousel.css";
import { Carousel } from "react-responsive-carousel";

export default class HomeBanner extends React.Component {
  render() {
    return (
      <div className="HomeBanner-container">
        <Carousel
          showStatus={false}
          showArrows={false}
          // showIndicators={false}
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          width="100vw"
          infiniteLoop={true}
        >
          <div>
            <img
              className="carousel-full-img"
              src={this.props.imgSrc[0]}
              alt="mainbanner"
              style={{
                width: 100 + "vw",
                maxHeight: 30 + "vh",
                objectFit: "cover"
              }}
            />
          </div>
          <div>
            <img
              className="carousel-full-img"
              src={this.props.imgSrc[1]}
              alt="mainbanner"
              style={{
                width: 100 + "vw",
                maxHeight: 30 + "vh",
                objectFit: "cover"
              }}
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
