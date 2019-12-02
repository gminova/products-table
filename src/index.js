import React from "react";
import ReactDOM from "react-dom";
import data from "./model/data";
import FilterableProductTable from "./components/FilterableProductTable";

ReactDOM.render(
  <FilterableProductTable data={data} />,
  document.getElementById("root")
);
