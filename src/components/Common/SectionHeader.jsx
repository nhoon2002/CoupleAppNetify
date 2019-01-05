import React from "react";
import "../../css/SectionHeader.css";

const SectionHeader = props => (
  <p className="sectionHeader">
    {/* The following code capitalizes the first letter of input prop */}
    {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
  </p>
);

export default SectionHeader;
