import React from 'react';
import MenuButton from './sub-components/MenuButton';
import Cart from './sub-components/Cart';
import Search from './sub-components/Search';

import styles from '../styles/header.module.css';

import corebizLogo from '../assets/corebiz-logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <MenuButton />
        <div className={styles.logo}>
          <img src={corebizLogo} alt="Logo preta" />
        </div>
        <Cart />
      </div>
      <Search />
    </header>
  );
};

export default Header;
