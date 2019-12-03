import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ data }) => {
  return (
    <>
      <ProductCategoryRow data={data} />
      <ProductRow data={data} />
    </>
  );
};

export default ProductTable;
