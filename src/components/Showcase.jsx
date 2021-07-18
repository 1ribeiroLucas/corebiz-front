import React from 'react';
import Product from './sub-components/Product';
import {mockProducts} from './sub-components/mockProducts';

const Showcase = () => {
  return (
    <section>
      <p>Mais vendidos</p>
      {
        mockProducts.map((product) => {
          return (
            <Product key={product.id} {...product} />
          );
        })
      }
    </section>
  );
};

export default Showcase;
