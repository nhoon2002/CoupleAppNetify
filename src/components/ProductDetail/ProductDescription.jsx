import React from "react";
import "../../css/ProductDescription.css";
import { NutritionLabel } from "react-fda-nutrition-facts";
export default class ProductDescription extends React.Component {
  render() {
    return (
      <div className="ProductDescription-container">
        <div className="description-holder">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <NutritionLabel
          servingSize={"1 cup (228g)"}
          servingsPerContainer={2}
          calories={260}
          totalFat={13}
          saturatedFat={5}
          transFat={2}
          cholesterol={30}
          sodium={660}
          totalCarbs={31}
          dietaryFiber={0}
          sugars={5}
          protein={5}
          vitaminA={4}
          vitaminC={2}
          calcium={15}
          iron={4}
        />
      </div>
    );
  }
}
