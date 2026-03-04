import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';

export default function Cart() {
  const { itemsInCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-wrapper">
        {itemsInCart.map(({ item, quantity }) => (
          <div key={item.id}>
            {item.name} — £{item.price.toFixed(2)} (Qty: {quantity})
          </div>
        ))}
      </div>
      <button className="shop-button" onClick={clearCart}>Clear cart </button>
    </div>
  );
}
