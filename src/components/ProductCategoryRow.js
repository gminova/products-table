import React from "react";

const ProductCategoryRow = ({ data }) => {
  return (
    <tr>
      {data.map((e, i) => (
        <th colSpan="2" key={i + 10000}>
          {e.category}
        </th>
      ))}
    </tr>
  );
};

export default ProductCategoryRow;
