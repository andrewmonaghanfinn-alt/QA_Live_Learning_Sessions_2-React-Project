import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { CartProvider } from "../context/cart-context";

const apiUrl = 'https://seed-theory-api.netlify.app/data.json';

export default function Shop({}) {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setItemsData(data));
  }, []);



  return (
    <main>
      <Header />
      <CartProvider>
      <h1>Our plants</h1>
      <Cart />
      <div className="items-grid">
        {itemsData.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      </CartProvider>
    </main>
  );
}
