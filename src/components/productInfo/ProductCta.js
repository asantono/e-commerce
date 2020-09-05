import React from "react";
import { courses } from "../../dummyData/courses";

const ProductCta = () => {
  const { title, author, tagline, adText } = courses[0];
  return (
    <div className="product-cta">
      <div className="product-cta__info">
        <div className="product-cta__info--title">{title}</div>
        <div className="product-cta__info--tagline">{adText}</div>
        <div className="product-cta__info--tagline">{tagline}</div>
        <div className="product-cta__info--author">Author: {author}</div>
      </div>
    </div>
  );
};

export default ProductCta;
