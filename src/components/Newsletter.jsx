import React, {useState, useEffect} from 'react';
import {validateNewsletter} from '../helpers/index';
import {newsletter} from '../services/index';

import styles from '../styles/newsletter.module.css';

const Newsletter = () => {
  const [disabled, setIsDisabled] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const buttonState = validateNewsletter(name, email);
    setIsDisabled(buttonState);
  }, [name, email]);

  const handleClick = async () => {
    await newsletter(name, email);
  };

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
            value={name}
            onChange={({target}) => setName(target.value)}
          />
        </label>
        <label htmlFor="email-input">
          <input
            className={styles.input}
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />
        </label>
        <button
          className={styles.button}
          type="button"
          disabled={disabled}
          onClick={() => handleClick()}
        >Eu quero!</button>
      </form>
    </section>
  );
};

export default Newsletter;
