import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/product.module.css';

const Product = (props) => {
  const {
    productName,
    stars,
    imageUrl,
    listPrice,
    price,
    installments,
  } = props;

  return (
    <div className={styles.product}>
      <img className={styles.productImage} src={imageUrl} alt='' />
      <p className={styles.productName}>{productName}</p>
      <p>{stars}</p>
      <p className={styles.listPrice}>{listPrice && `de R$ ${listPrice}`}</p>
      <p className={styles.price}>por R$ {price}</p>
      {
        installments.map(({quantity, value}, index) => {
          return (
            <Fragment key={index}>
              <span
                className={styles.installments}
              >
                ou em {quantity}x de {value}
              </span>
            </Fragment>
          );
        })
      }
      <button className={styles.button} type="button">COMPRAR</button>
    </div>
  );
};

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  listPrice: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  installments: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  })),
};

export default Product;
