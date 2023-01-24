import React from 'react';
import './Search.css';

export default function Search({ handleSearch, setSearchTerm, searchTerm }) {
  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button className="searchButton" onClick={(e) => handleSearch(e, searchTerm)}>
        +
      </button>
    </div>
  );
}
