import React from 'react';

import styles from '../../styles/cart.module.css';

import cart from '../../assets/cart.svg';

const Cart = () => (
  <div className={styles.cartBox}>
    <button type="button" className={styles.cartButton}>
      <img src={cart} alt="Carrinho" />
    </button>
    <span className={styles.cartItems}>0</span>
  </div>
);

export default Cart;
