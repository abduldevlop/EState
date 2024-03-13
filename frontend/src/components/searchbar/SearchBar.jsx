import "./SearchBar.scss";

import React, { useState } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const swithType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };
  return (
    <div className="search-bar">
      <div className="type">
        <button
          onClick={() => swithType("buy")}
          className={query.type === "buy" ? "active" : ""}
        >
          Buy
        </button>
        <button
          onClick={() => swithType("rent")}
          className={query.type === "rent" ? "active" : ""}
        >
          Rent
        </button>
      </div>
      <form>
        <input type="text" name="location" placeholder="City" />
        <input type="text" name="minPrice" placeholder="Min Price" />
        <input type="text" name="maxPrice" placeholder="Max Price" />
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};
