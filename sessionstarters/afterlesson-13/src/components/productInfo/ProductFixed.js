import React from "react";
import { courses, sale } from "../../dummyData/courses";

const ProductFixed = () => {
  const {
    img,
    price,
    slaesOptIn,
    length,
    accessType,
    certification,
  } = courses[0];
  return (
    <div className="product-cta__buynow">
      <img className="product-cta__buynow--top" src={img} alt="top img" />
      <div className="product-cta__buynow--bottom">
        <div className="product-cta__buynow--bottom--price">${price}</div>
        <input
          className="product-cta__buynow--bottom--addtocart"
          type="submit"
          value="add to cart"
        />
        <div className="product-cta__buynow--bottom--points">
          <strong>
            <u>course includes:</u>
          </strong>
          <div className="product-cta__buynow--bottom--points--medium">
            <li>length: {length}</li>
            <li>access: {accessType}</li>
            <li>certification: {certification}</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFixed;
