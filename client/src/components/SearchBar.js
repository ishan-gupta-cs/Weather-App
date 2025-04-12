import React, { useState } from "react";
import { Search } from "react-feather";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4 w-75 w-md-50">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="form-control form-control-lg mr-2"
      />
      <button
        type="submit"
        className="btn btn-warning btn-lg"
      >
        <Search size={18} />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
