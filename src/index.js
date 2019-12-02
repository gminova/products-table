import React from "react";
import ReactDOM from "react-dom";
import data from "./model/data";
import Table from "./components/Table";

ReactDOM.render(<Table data={data} />, document.getElementById("root"));
