import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import CoreContext from '../../context/Context';

import styles from '../../styles/product.module.css';

import flag from '../../assets/flag.svg';

const Product = (props) => {
  const {setCartItems} = useContext(CoreContext);
  const {
    productId,
    productName,
    imageUrl,
    listPrice,
    price,
    installments,
  } = props;

  return (
    <div className={styles.product}>
      <img className={styles.productImage} src={imageUrl} alt='' />
      <p className={styles.productName}>{productName}</p>
      <p className={styles.listPrice}>{listPrice && `de R$ ${listPrice}`}</p>
      <p className={styles.price}>por R$ {price}</p>
      {
        installments.map(({quantity, value}, index) => {
          return (
            <span key={index} className={styles.installments}>
              ou em {quantity}x de {value}
            </span>
          );
        })
      }
      <button
        className={styles.button}
        type="button"
        onClick={() => setCartItems((state) => ([...state, productId]))}
      >COMPRAR</button>
      <img
        src={flag}
        alt=""
        className={listPrice ? styles.flagOn : styles.flagOff }
      />
    </div>
  );
};

Product.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  listPrice: PropTypes.number,
  price: PropTypes.number.isRequired,
  installments: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  })),
};

export default Product;
