"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const router = useRouter();

  const getCartItems = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const cartString = localStorage.getItem("cart");
      if (cartString) {
        try {
          const cart = JSON.parse(cartString);
          return cart;
        } catch (error) {
          console.log(error);
        }
      }
      return null;
    }
    return null;
  };
  const [cartItems, setCartItems] = useState(() => getCartItems() || []);
  const tax = 0.1;
  const shipping = 5.0;
  function handleAddToCart(getCurrentItem) {
    const existingProductIndx = cartItems.findIndex(
      (product) => product.name === getCurrentItem.name
    );
    const colorProductIsSame =
      cartItems[existingProductIndx]?.color?.name === getCurrentItem.color.name;
    const sizeProductIsSame =
      cartItems[existingProductIndx]?.size?.name === getCurrentItem.size.name;

    if (existingProductIndx !== -1 && colorProductIsSame && sizeProductIsSame) {
      // Product is already in the cart
      const updateCartItems = [...cartItems];
      updateCartItems[existingProductIndx].quantity += 1;
      setCartItems(updateCartItems);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...getCurrentItem, quantity: 1 },
      ]);
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function handleDeleteOfCart(getCurrentItem) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((product) => {
        const isSameProduct =
          product.name === getCurrentItem.name &&
          product.color.name === getCurrentItem.color.name &&
          product.size.name === getCurrentItem.size.name;

        return !isSameProduct;
      })
    );
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

  const onLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setCartItems([]);
    router.refresh();
    router.push("/");
  };
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
        onLogout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
