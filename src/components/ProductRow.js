import React from "react";

const ProductRow = ({ data }) => {
  return (
    <tr>
      {data.map((e, i) => (
        <>
          <td key={i}>{e.name}</td>
          <td key={i + 999}>{e.price}</td>
        </>
      ))}
    </tr>
  );
};

export default ProductRow;
