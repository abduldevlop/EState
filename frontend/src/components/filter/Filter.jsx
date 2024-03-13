import "./Filter.scss";
import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Kolkata</b>{" "}
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city"> Location </label>
          <input type="text" id="city" name="city" placeholder="City" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type"> Type </label>
          <select name="type" id="type">
            <option value="buy">Select</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property"> Property </label>
          <select name="property" id="property">
            <option value="apertment">Select</option>
            <option value="apertment">Apertment</option>
            <option value="House">House</option>
            <option value="condo">Condo</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="min-price"> Min Price </label>
          <input
            type="number"
            id="min-price"
            name="mi-price"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="max-price"> Max Price </label>
          <input
            type="text"
            id="max-price"
            name="max-price"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="beadroom"> Beadroom </label>
          <input type="text" id="beadroom" name="beadroom" placeholder="any" />
        </div>
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
