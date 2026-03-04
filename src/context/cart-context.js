import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([]);

  function addToCart(item) {
    setItemsInCart((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);

      // If already in cart → increase quantity
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }

      // If not in cart → create NEW object with quantity
      return [...prev, { item, quantity: 1 }];
    });
  }

  function clearCart() {
    setItemsInCart([]);
  }

  const contextValue = {
    itemsInCart,
    addToCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
