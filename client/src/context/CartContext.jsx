import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.name === product.name);
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        const updatedProduct = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        updatedCart[existingProductIndex] = updatedProduct;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productName) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updatedCart;
    });
  };

  const decreaseQuantity = (productName) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
      return updatedCart;
    });
  };

  const value = useMemo(() => ({
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  }), [cart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}


CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
};