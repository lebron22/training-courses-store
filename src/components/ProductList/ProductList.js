import React from "react";
import Product from "../Product/Product";
import "./ProductList.sass";

const ProductList = ({ matches }) => {
  const products = matches.map(product => {
    return <Product key={product.id} product={product} />;
  });
  return <div className="products-list">{products}</div>;
};

export default ProductList;
