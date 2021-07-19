import React from 'react';

import styles from '../styles/newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <p className={styles.text}>
        Participe de nossas news com promoções e novidades!
      </p>
      <form className={styles.form}>
        <label htmlFor="name-input">
          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email-input">
          <input
            className={styles.input}
            type="email"
            placeholder="Digite seu email"
          />
        </label>
        <button
          className={styles.button}
          type="button"
        >Eu quero!</button>
      </form>
    </section>
  );
};

export default Newsletter;
