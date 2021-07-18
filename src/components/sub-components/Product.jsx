import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <div>
        <img src={imageUrl} alt='' />
      </div>
      <p>{productName}</p>
      <p>{stars}</p>
      <p>{listPrice}</p>
      <p>{price}</p>
      {
        installments.map(({quantity, value}, index) => {
          return (
            <Fragment key={index}>
              <p>em até {quantity} vezes</p>
              <p>de {value}</p>
            </Fragment>
          );
        })
      }
      <button type="button">Comprar</button>
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
