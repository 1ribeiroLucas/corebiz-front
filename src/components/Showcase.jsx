import React from 'react';
import Product from './sub-components/Product';
// import Slider from 'infinite-react-carousel';
import {mockProducts} from './sub-components/mockProducts';

import styles from '../styles/showcase.module.css';

// const sliderSettings = {
//   arrows: false,
//   dots: true,
//   slidesToShow: 2,
// };

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <p className={styles.topSeller}>Mais vendidos</p>
      <div className={styles.divider}></div>
      <div className={styles.products}>
        {
          mockProducts.map((product) => {
            return (
              <Product key={product.id} {...product} />
            );
          })
        }
      </div>
    </section>
  );
};

export default Showcase;
