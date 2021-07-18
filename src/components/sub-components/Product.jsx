import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const {
    productId,
    productName,
    stars,
    imageUrl,
    listPrice,
    price,
    installments,
  } = props;

  return (
    <div>
      <div>
        <img src={imageUrl} alt='' />
      </div>
      <span>{productName}</span>
    </div>
  );
};

export default Product;
