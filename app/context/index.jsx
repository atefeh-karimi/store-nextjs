"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const tax = 0.1;
  const shipping = 5.0;
  function handleAddToCart(getCurrentItem) {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...getCurrentItem, quantity: 1 },
    ]);
  }
  function handleDeleteOfCart(getCurrentItem) {
    setCartItems(cartItems.filter((p) => p.name != getCurrentItem.name));
  }
  function handleUpdateQuantity(getCurrentItem) {
    const { name, value } = getCurrentItem.target;
    setCartItems((prev) =>
      prev.map((product) =>
        product.name === name ? { ...product, quantity: value } : product
      )
    );
  }

  function getCartTotal() {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
  const calculateTaxes = getCartTotal() * tax;
  function getOrderTotalPrice() {
    return getCartTotal() + calculateTaxes + shipping;
  }

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        handleDeleteOfCart,
        cartItems,
        handleUpdateQuantity,
        getCartTotal,
        getOrderTotalPrice,
        tax,
        calculateTaxes,
        shipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
