import React from "react";
import "../../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faInstagram,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="social-icons-holder">
          <div
            className="faHolder"
            style={{
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#222"
            }}
          >
            <FontAwesomeIcon
              color="white"
              style={{ verticalAlign: "middle" }}
              icon={faYoutube}
            />
          </div>
          <div
            className="faHolder"
            style={{
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#222"
            }}
          >
            <FontAwesomeIcon
              color="white"
              style={{ verticalAlign: "middle" }}
              icon={faInstagram}
            />
          </div>
          <div
            className="faHolder"
            style={{
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#222"
            }}
          >
            <FontAwesomeIcon
              color="white"
              style={{ verticalAlign: "middle" }}
              icon={faFacebookF}
            />
          </div>
        </div>
        <p className="copyright">Copyright 2019 NHCH. All rights reserved.</p>
      </footer>
    );
  }
}
