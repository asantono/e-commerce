import React, { Fragment } from "react";
import ProductCta from "../components/productInfo/ProductCta";
import ProductFixed from "../components/productInfo/ProductFixed";
import ProductFeatures from "../components/productInfo/ProductFeatures";

const Product = () => {
  return (
    <Fragment>
      <ProductCta />
      <ProductFeatures />
      <ProductFixed />
    </Fragment>
  );
};

export default Product;
