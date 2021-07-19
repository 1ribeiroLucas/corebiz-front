import React from 'react';

import styles from '../../styles/menuButton.module.css';

import menuIcon from '../../assets/menu-icon.svg';

const MenuButton = () => (
  <button className={styles.button} type="button">
    <img src={menuIcon} alt="Menu" />
  </button>
);

export default MenuButton;
