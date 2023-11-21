"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  function handleAddToCart(getCurrentItem) {
    setCartItems((prevCartItems) => [...prevCartItems, getCurrentItem]);
  }

  return (
    <CartContext.Provider value={{ handleAddToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
