import React from "react";
import useScrollTracker from "../../customHooks/useScrollTracker";
import { courses, sale } from "../../dummyData/courses";

const ProductFixed = () => {
  const {
    img,
    price,
    saleOptIn,
    length,
    accessType,
    certification,
  } = courses[0];

  const currentPrice = saleOptIn && sale ? price * sale : price;

  const { tooClose } = useScrollTracker(90);

  const scrollTracking = useScrollTracker();

  console.log(scrollTracking);

  // Classes
  const fixedClass = tooClose
    ? "product-cta__buynow product-cta__buynow--offset"
    : "product-cta__buynow";

  return (
    <div className={fixedClass}>
      <img className="product-cta__buynow--top" src={img} alt="top img" />
      <div className="product-cta__buynow--bottom">
        <div className="product-cta__buynow--bottom--price">
          ${currentPrice}
          {saleOptIn && sale ? (
            <span className="product-cta__buynow--bottom--price--slash">
              ${price}
            </span>
          ) : null}
        </div>
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
