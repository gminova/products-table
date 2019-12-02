import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import mock from "../model/mock";

const FilterableProductTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(mock);
  }, []);

  if (!data) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <SearchBar data={data} />
      <ProductTable />
    </div>
  );
};
export default FilterableProductTable;
