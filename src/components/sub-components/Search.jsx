import React from 'react';

import search from '../../assets/search.svg';

const Search = () => (
  <div>
    <label htmlFor="search-input">
      <input
        id="search-input"
        type="text"
        placeholder="O que você está procurando?" />
    </label>
    <button type="button">
      <img src={search} alt="Buscar" />
    </button>
  </div>
);

export default Search;
