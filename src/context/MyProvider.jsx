import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CoreContext from './Context';

const MyProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const contextData = {
    cartItems, setCartItems,
  };

  return (
    <CoreContext.Provider value={contextData}>
      {children}
    </CoreContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
