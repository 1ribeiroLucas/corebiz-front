import React from 'react';

import envelope from '../assets/envelope.svg';
import headphone from '../assets/headphone.svg';
import corebizWhite from '../assets/corebiz-white.svg';
import vtex from '../assets/vtex.svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Localização</p>
        <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p>Alphaville SP</p>
        <p>brasil@corebiz.ag</p>
        <p>+55 11 3090 1039</p>
      </div>

      <div>
        <button type="button">
          <img src={envelope} alt="" />
          <span>ENTRE EM CONTATO</span>
        </button>
        <button type="button">
          <img src={headphone} alt="" />
          <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
        </button>
      </div>

      <div>
        <div>
          <span>Created by</span>
          <img src={corebizWhite} alt="" />
        </div>
        <div>
          <span>Powered by</span>
          <img src={vtex} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
