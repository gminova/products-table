import React from "react";

const ProductRow = ({ data }) => {
  return (
    <tr>
      {data.map((e, i) => (
        <>
          <td>{e.name}</td>
          <td>{e.price}</td>
        </>
      ))}
    </tr>
  );
};

export default ProductRow;
