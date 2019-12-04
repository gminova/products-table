import React from "react";

const SearchBar = ({ data }) => {
  return (
    <div>
      <label htmlFor="search" aria-label="search">
        <input type="text" id="search" placeholder="Search..."></input>
      </label>
      <br />
      <label htmlFor="checkbox" aria-label="filter stock items only">
        <input type="checkbox" id="checkbox" />
        Only show products in stock
      </label>
    </div>
  );
};

export default SearchBar;
