import React from 'react';

export default function Search({ handleSearch, setSearchTerm, searchTerm }) {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={(e) => handleSearch(e, searchTerm)}>Search</button>
    </div>
  );
}
