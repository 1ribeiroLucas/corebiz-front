import React, {useContext} from 'react';
import CoreContext from '../../context/Context';

import styles from '../../styles/cart.module.css';

import cart from '../../assets/cart.svg';

const Cart = () => {
  const {cartItems} = useContext(CoreContext);
  console.log(cartItems);

  return (
    <div className={styles.cartBox}>
      <button type="button" className={styles.cartButton}>
        <img src={cart} alt="Carrinho" />
      </button>
      <span className={styles.cartItems}>
        {cartItems && cartItems.length}
      </span>
    </div>
  );
};

export default Cart;
