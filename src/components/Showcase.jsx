import React, {useState, useEffect, Fragment} from 'react';
import Product from './sub-components/Product';
import {getProducts} from '../services';

import styles from '../styles/showcase.module.css';

const Showcase = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiProducts = async () => {
      setProducts(await getProducts());
    };
    apiProducts();
  }, []);
  return (
    <section className={styles.showcase}>
      <p className={styles.topSeller}>Mais vendidos</p>
      <div className={styles.divider}></div>
      <div className={styles.products}>
        {
          products && products.map((product) => {
            return (
              <Fragment key={product.id}>
                <Product {...product} />
              </Fragment>
            );
          })
        }
      </div>
    </section>
  );
};

export default Showcase;
