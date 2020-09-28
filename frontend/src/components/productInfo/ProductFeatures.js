import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { courses } from "../../dummyData/courses";

const ProductFeatures = () => {
  const { features } = courses[0];

  const makeFeatures = features.map((el) => (
    <div className="product-features__feature" key={el}>
      <div className="product-features__feature--check">
        <IoIosCheckmarkCircleOutline />
      </div>
      {el}
    </div>
  ));
  return (
    <div className="product-features">
      <div className="product-features__title">Topics Covered</div>
      <div className="product-features__list">{makeFeatures}</div>
    </div>
  );
};

export default ProductFeatures;
