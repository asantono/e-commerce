import React from "react";
import useScrollTracker from "../../customHooks/useScrollTracker";
import { courses, sale } from "../../dummyData/courses";

// if($(window).scrollTop() + $(window).height() > $(document).height() - 200)

const ProductFixed = () => {
  const { tooClose, scrollY, windowHeight, documentHeight } = useScrollTracker(
    90
  );
  console.log("too close " + tooClose);
  console.log("YYYYY " + scrollY);
  console.log("window height: " + windowHeight);
  console.log("document height: " + documentHeight);

  const fixedClass = tooClose
    ? "product-cta__buynow--container product-cta__buynow--container--offset"
    : "product-cta__buynow--container";
  const {
    img,
    price,
    saleOptIn,
    length,
    accessType,
    certification,
  } = courses[0];
  let currentPrice = saleOptIn && sale ? price * sale : price;
  return (
    <div className={fixedClass}>
      <div className="product-cta__buynow">
        <img className="product-cta__buynow--top" src={img} alt="top img" />
        <div className="product-cta__buynow--bottom">
          <div className="product-cta__buynow--bottom--price">
            ${currentPrice}
            {saleOptIn ? (
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
    </div>
  );
};

export default ProductFixed;
