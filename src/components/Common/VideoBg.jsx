import React from "react";
class VideoBg extends React.Component {
  render() {
    return (
      <React.Fragment>
        <video id="bgVid" muted loop autoPlay playsInline>
          <source src="assets/images/bg/IMG_3074.mov" type="video/mp4" />
        </video>
      </React.Fragment>
    );
  }
}
export default VideoBg;
