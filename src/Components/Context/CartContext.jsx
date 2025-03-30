import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({});

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const updateCustomerDetails = (details) => {
    setCustomerDetails(details);
  };

  return (
    <CartContext.Provider value={{ cartItems, customerDetails, addToCart, updateCustomerDetails }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
