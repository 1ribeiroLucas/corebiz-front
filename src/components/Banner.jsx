import React from 'react';

import styles from '../styles/banner.module.css';

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.bgColor}>
      <div className={styles.textBox}>
        <p className={styles.textOne}>O que você está procurando?</p>
        <p className={styles.textTwo}>Criar ou migrar o seu e-commerce?</p>
      </div>
    </div>
  </section>
);

export default Banner;
