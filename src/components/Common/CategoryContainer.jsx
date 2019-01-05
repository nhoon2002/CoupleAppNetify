import React from "react";
import CategoryBox from "./CategoryBox.jsx";
import "../../css/CategoryContainer.css";
export default class CategoryContainer extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="CategoryContainer-container">
        {categories.map((cat, i) => (
          <div className="wholes" key={i}>
            <CategoryBox
              categoryName={cat.name}
              categoryImg={cat.img_url}
              router={this.props.router}
            />
          </div>
        ))}
      </div>
    );
  }
}
