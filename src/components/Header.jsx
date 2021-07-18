import React from 'react';
import MenuButton from './sub-components/MenuButton';
import Cart from './sub-components/Cart';
import Search from './sub-components/Search';

import corebizLogo from '../assets/corebiz-logo.svg';

const Header = () => {
  return (
    <header>
      <MenuButton />
      <div>
        <img src={corebizLogo} alt="Logo preta" />
      </div>
      <Cart />
      <Search />
    </header>
  );
};

export default Header;
