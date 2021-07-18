import React from 'react';

const Newsletter = () => {
  return (
    <section>
      <p>Participe de nossas news com promoções e novidades!</p>
      <form>
        <label htmlFor="name-input">
          <input type="text" placeholder="Digite seu nome" />
        </label>
        <label htmlFor="email-input">
          <input type="email" placeholder="Digite seu email" />
        </label>
        <button type="button">Eu quero!</button>
      </form>
    </section>
  );
};

export default Newsletter;
