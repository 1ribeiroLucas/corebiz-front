import React from 'react';

import styles from '../../styles/search.module.css';

import search from '../../assets/search.svg';

const Search = () => (
  <div className={styles.searchBox}>
    <label htmlFor="search-input">
      <input
        id="search-input"
        type="text"
        placeholder="O que você está procurando?"
        className={styles.input}
      />
    </label>
    <button type="button" className={styles.button}>
      <img src={search} alt="Buscar" />
    </button>
  </div>
);

export default Search;
