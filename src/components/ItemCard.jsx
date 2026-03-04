import React, { useContext } from 'react'
import { CartContext } from '../context/cart-context'

export default function ItemCard({id, imageUrl, name, price }) {

  const { addToCart } = useContext(CartContext)

  function handleAddToCart() {
    addToCart({id, imageUrl, name, price})
  }
  return (
    <div className="item-card">
      <img className="image" src={imageUrl}/>
      <h3>{name}</h3>
      <p>£{price.toFixed(2)}</p>
      <button onClick={handleAddToCart} className="shop-button">Add to cart</button>
    </div>
  )
}
